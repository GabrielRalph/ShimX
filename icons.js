import {SvgPlus} from "./SvgPlus/4.js"
let icons = [
    {
        name: "tv",
        c1: [0.752, 0.739],
        c2: [0.764, 0.752],
        height: 0.18,
    },
    {
        name: "ct",
        height: 0.434,
        c1: [0.544, 0.571],
        c2: [0.558, 0.586]
    },
    {
        name: "cf",
        height: 0.82,
        c1: [0.595, 0.426],
        c2: [0.605, 0.443]
    },
    {
        name: "well",
        height: 0.25,
        c1: [0.514, 0.822],
        c2: [0.533, 0.845]
    },
]

const HOVER_DELAY = 100;
export async function load(){
    let icons_container = new SvgPlus(document.getElementById("icons"));

    for (let icon of icons) {
        icon.img = icons_container.createChild("img", {
            src: `./Assets/Icons/${icon.name}.png`,
            name: icon.name,
            class: 'icon',
            styles: {
                '--c1x': icon.c1[0],
                '--c1y': icon.c1[1],
                '--c2x': icon.c2[0],
                '--c2y': icon.c2[1],
                '--h': icon.height
            }
        });
    }
    let i = 0;
    for (let icon of icons) {
        let resp = await fetch(`./Assets/Icons/${icon.name}-cb.svg`);
        let svg = await resp.text();
        svg = new SvgPlus(SvgPlus.parseSVGString(svg));
        svg.props = {
            name: icon.name,
            class: 'clickbox',
            styles: {
                '--c1x': (icon.c1[0] + icon.c2[0])/2,
                '--c1y': (icon.c1[1] + icon.c2[1])/2,
                '--h': icon.height
            }
        }
        // icons_container.createChild("svg", {
        //     class: "clickbox",
        //     viewBox: svg.getAttribute("viewBox")
        // })
        icons_container.appendChild(svg);
        let path = svg.querySelector("path, polygon");
        path.icon_name = icon.name;
        path.icon_index = i;
        icon.cb = svg;
        i++;
    }

    window.addEventListener("mousemove", (e) => {
        for (let icon of icons) {
            if (icon.mouseover && (performance.now() - icon.to > HOVER_DELAY)) {
                icon.mouseover = false;
                icon.img.removeAttribute("mouseover");
            }
        }

        for(let el of document.elementsFromPoint(e.x, e.y)) {
            if (el.icon_name) {
                let icon = icons[el.icon_index];
                icon.mouseover = true;
                icon.to = performance.now()
                icon.img.toggleAttribute("mouseover", true);
            }
        }
    })

}




