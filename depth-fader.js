"use strict";
import { SvgPlus } from "./SvgPlus/4.js";


export function relative({clientX, clientY}, canvas, mult = -0.025) {
  let bbox = canvas.getBoundingClientRect();
  let rx = (clientX - bbox.x) / bbox.width;
  let ry = (clientY - bbox.y) / bbox.height;

  rx = rx > 1 ? 1 : (rx < 0 ? 0 : rx);
  ry = ry > 1 ? 1 : (ry < 0 ? 0 : ry);


  return [rx * mult, ry * mult];
}

export function round(x, y = 3) {
  return Math.round(Math.pow(10, y) * x) / Math.pow(10, y);
}

async function createTexture(gl, options) {
  return new Promise((resolve, reject) => {
    const tex = twgl.createTexture(gl, options, (err, texture, source) => {
      if(err) reject(err);
      else resolve([tex, source])
    });
  })
}

async function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}



let rendered = false;
export async function initialise() {

  let scripts = new SvgPlus("div");
  scripts.styles = {display: "contents"};
  document.body.appendChild(scripts);

  
    // Vertex Shader
  scripts.innerHTML += `<script id="vs" type="f">
  attribute vec2 position;
  attribute vec2 texcoord;

  uniform mat3 u_matrix;

  varying vec2 v_texcoord;

  void main() {
    gl_Position = vec4(u_matrix * vec3(position, 1), 1);
    v_texcoord = texcoord;
  }
  </script>`

  // Fragment shader
  scripts.innerHTML += `<script id="fs" type="f">
  precision mediump float;

  uniform vec2 u_mouse;

  uniform sampler2D u_originalImage;
  uniform sampler2D u_mapImage;

  varying vec2 v_texcoord;

  void main() {
    vec4 depthDistortion = texture2D(u_mapImage, v_texcoord);
    float parallaxMult = depthDistortion.r;

    vec2 parallax = (u_mouse) * parallaxMult;

    vec4 original = texture2D(u_originalImage, (v_texcoord + parallax));
    gl_FragColor = original;
  }
  </script>`

  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  const [originalTexture, originalImage] = await createTexture(gl, {
    src: "./Assets/o_tex.jpg",
    crossOrigin: '',
  })
  canvas.height = originalImage.naturalHeight;
  canvas.width = originalImage.naturalWidth;

  const [mapTexture] = await createTexture(gl, {
    src: "./Assets/d_map.png", crossOrigin: '',
  });
  
  console.log("textures")
  // compile shaders, link program, lookup location
  const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

  // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for a quad
  const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

  return new Promise((resolve, reject) => {
    canvas.prlx = [0, 0];

    let render = () => {

      // twgl.resizeCanvasToDisplaySize(gl.canvas);

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

      const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const imageAspect = originalImage.width / originalImage.height;
      const mat = m3.scaling(imageAspect / canvasAspect, -1);

      let {prlx} = canvas;
      const mouse = [(prlx[0]-0.5) * -0.025, (prlx[1]-0.5) * -0.025];
      canvas.parentNode.style.setProperty("--px", prlx[0]);
      canvas.parentNode.style.setProperty("--py", prlx[1]);
      // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
      twgl.setUniforms(programInfo, {
        u_matrix: mat,
        u_originalImage: originalTexture,
        u_mapImage: mapTexture,
        u_mouse: mouse,
      });

      // calls gl.drawArrays or gl.drawElements
      twgl.drawBufferInfo(gl, bufferInfo);

      if (!rendered) {
        rendered = true;
        resolve(true);
      }
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

  })
}

