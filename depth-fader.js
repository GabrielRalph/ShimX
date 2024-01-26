"use strict";

// Vertex Shader
document.body.innerHTML += `<script id="vs" type="f">
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
document.body.innerHTML += `<script id="fs" type="f">
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

function main() {
  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  let originalImage = { width: 1, height: 1 }; // replaced after loading
  const originalTexture = twgl.createTexture(gl, {
    src: "./Assets/empty_background.jpg",
    crossOrigin: '',
  }, (err, texture, source) => {
    originalImage = source;
    let {naturalHeight, naturalWidth} = originalImage;
    canvas.width = naturalWidth;
    canvas.height = naturalHeight;
  });
  const T2 = twgl.createTexture(gl, {
    src: "./Assets/Clownfish side wall.png", crossOrigin: '',
  });

  const mapTexture = twgl.createTexture(gl, {
    src: "./Assets/depth_map.png", crossOrigin: '',
  });
  const D2 = twgl.createTexture(gl, {
    src: "./Assets/d2.png", crossOrigin: '',
  });

  // compile shaders, link program, lookup location
  const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

  // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for a quad
  const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

  const mouse = [0, 0];
  document.addEventListener('mousemove', (event) => {
    mouse[0] = (event.clientX / window.innerWidth  * 2 - 1) * -0.02;
    mouse[1] = (event.clientY / window.innerHeight * 2 - 1) * -0.02;
  });

	document.addEventListener('touchmove', (event) => {
    mouse[0] = (event.touches[0].clientX / gl.canvas.clientWidth  * 2 - 1) * -0.02;
    mouse[1] = (event.touches[0].clientY / gl.canvas.clientHeight * 2 - 1) * -0.02;
  });

	document.addEventListener('touchend', (event) => {
    mouse[0] = 0;
    mouse[1] = 0;
  });

  let down = false;
  document.addEventListener('mousedown', () => {
    down = true;
  })
  document.addEventListener('mouseup', () => {
    down = false;
  })

	var nMouse = [0, 0];

  requestAnimationFrame(render);

  function render() {

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

		nMouse[0] =  mouse[0];
		nMouse[1] =  mouse[1];
    // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
    twgl.setUniforms(programInfo, {
      u_matrix: mat,
      u_originalImage: down ? T2: originalTexture,
      u_mapImage: down ? D2: mapTexture,
      u_mouse: nMouse,
    });

    // calls gl.drawArrays or gl.drawElements
    twgl.drawBufferInfo(gl, bufferInfo);

    requestAnimationFrame(render);
  }
}

main();
