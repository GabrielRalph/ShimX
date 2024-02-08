import { SvgPlus } from "../SvgPlus/4.js"

class HoverEvent extends Event {
    constructor(type, icon) {
        super(type, {cancelable: type == "hover", bubbles: true});
        this.icon = icon;
    }
}
const HOVER_DELAY = 150;
export class IconGroup extends SvgPlus {

    defualtHoverIcon(icon){
        icon.mouseover = true;
        icon.timeOfHover = performance.now();
        icon.img.toggleAttribute("mouseover", true);
    }


    onconnect(){
        let e = null;
        window.addEventListener("mousemove", (ev) => e = ev)

        let next = () => {
            if (this.loaded && e != null) {
                this.iconsList.forEach(i => i.cmo = false);
                
                let moicons = [...document.elementsFromPoint(e.x, e.y)].filter(e => e.icon_name).map(e => this.icons[e.icon_name]);
    
                document.body.style.setProperty("cursor", moicons.length>0 ? "pointer" : null);
               
                for (let icon of moicons) {
                    icon.cmo = true;
                    const event = new HoverEvent("hover", icon);
                    this.dispatchEvent(event);
                    if (!event.defaultPrevented) this.defualtHoverIcon(event.icon);
                }
    
                for (let icon of this.iconsList.filter(i => !i.cmo)) {
                    if (icon.mouseover && (performance.now() - icon.timeOfHover > HOVER_DELAY)) {
                        icon.mouseover = false;
                        icon.img.removeAttribute("mouseover");
                        const event = new HoverEvent("hoverleave", icon);
                        this.dispatchEvent(event);
                    }
                }
            }
            window.requestAnimationFrame(next)
        }
        window.requestAnimationFrame(next)
    
        this.addEventListener("click", (e) => {
            if (!this.loaded) return;
            let icons = [...document.elementsFromPoint(e.x, e.y)].filter(e => e.icon_name).map(e => this.icons[e.icon_name])
            e.icons = icons;
        })
    }

    async loadIcons(icons) {
        this.innerHTML = "";
        this.clickBoxes = this.createChild("div");
        this.images = this.createChild("div");

        let _icons = {}
        let iconsList = [];
        let i = 0;
        for (let icon of icons) {
            let _icon = {name: icon.name};
            // create icon click box
            let clickBox = `${icon.name}-cb.svg`;
            if ("clickBoxName" in icon) clickBox = icon.clickBoxName;
            if (typeof clickBox == "string") {
                let resp = await fetch(`./Assets/Icons/${clickBox}`);
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
                this.clickBoxes.appendChild(svg);
                let path = svg.querySelector("path, polygon");
                path.icon_name = icon.name;
                path.icon_index = i;
                _icon.clickBox = svg;
            }
    

            let name = `${icon.name}.png`;
            if ("imgName" in icon) name = icon.imgName;
            if (typeof name === "string") {
                _icon.img = this.images.createChild("img", {
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
            } else {
                _icon.img = new SvgPlus('div');
            }
            if (icon.imgProps) _icon.img.props = icon.imgProps;
            _icons[icon.name] = _icon;
            iconsList.push(_icon);
            i++;
        }
        this.icons = _icons;
        this.iconsList = iconsList;
        this.loaded = true;
    }

  
}

SvgPlus.defineHTMLElement(IconGroup)



