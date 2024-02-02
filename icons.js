import { SvgPlus } from "./SvgPlus/4.js"
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
        c2: [0.558, 0.586],
        onhover: clownHover,
        onleave: () => ch = false

    },
    {
        name: "cf",
        height: 0.82,
        c1: [0.595, 0.426],
        c2: [0.605, 0.443],
        onhover: clownHover,
        onleave: () => ch = false
    },
    {
        name: "well",
        height: 0.25,
        c1: [0.514, 0.822],
        c2: [0.533, 0.845]
    },
]

let iconMap = {};
for (let icon of icons) iconMap[icon.name]=icon;

function hoverIcon(icon){
    icon.mouseover = true;
    icon.to = performance.now();
    icon.img.toggleAttribute("mouseover", true);
}

let ch = false;
let ctype = "cf"
function clownHover(icon) {
    if (!ch) {
        ch = true;
        ctype = ctype == "cf" ? "ct" : "cf";
    }
    icon = iconMap[ctype];
    hoverIcon(icon)
    return false;
}

const HOVER_DELAY = 150;
export async function load() {
    let icons_container = new SvgPlus(document.getElementById("icons"));

    let i = 0;
    for (let icon of icons) {
        let resp = await fetch(`./Assets/Icons/${icon.name}-cb.svg`);
        let svg = await resp.text();
        svg = new SvgPlus(SvgPlus.parseSVGString(svg));
        svg.props = {
            name: icon.name,
            class: 'clickbox',
            styles: {
                '--c1x': (icon.c1[0] + icon.c2[0]) / 2,
                '--c1y': (icon.c1[1] + icon.c2[1]) / 2,
                '--h': icon.height
            }
        }

        icons_container.appendChild(svg);
        let path = svg.querySelector("path, polygon");
        path.icon_name = icon.name;
        path.icon_index = i;
        icon.cb = svg;
        i++;
    }
    for (let icon of icons) {
        let name = `${icon.name}.png`;
        if (icon.imgname) name = icon.imgname;
        icon.img = icons_container.createChild("img", {
            src: `./Assets/Icons/${name}`,
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

    icons[0].img.addEventListener("drag", (e) => {
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
    })

    window.addEventListener("mousemove", (e) => {
        let micons = [...document.elementsFromPoint(e.x, e.y)].filter(e => e.icon_name)

        for (let icon of icons) {
            let ism = false;
            for (let i of micons) if (i.icon_name == icon.name) ism = true;
            if (!ism && icon.mouseover && (performance.now() - icon.to > HOVER_DELAY)) {
                icon.mouseover = false;
                if (icon.onleave instanceof Function) icon.onleave(icon);
                console.log(icon);
                icon.img.removeAttribute("mouseover");
            }
        }

        if (micons.length > 0) {
            document.body.style.setProperty("cursor", "pointer")
        } else {
            document.body.style.setProperty("cursor", null)

        }
        for (let el of micons) {
            let icon = icons[el.icon_index];
            let addH = true;
            if (icon.onhover instanceof Function) addH = icon.onhover(icon);
            if (addH) hoverIcon(icon);
        }
    })

}




