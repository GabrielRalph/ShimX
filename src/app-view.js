import { SvgPlus } from "../SvgPlus/4.js";
import { } from "./icons.js";
let DF_promise = import("./depth-fader.js");
let DF = null;

const MIN_LOADER_TIME = 2000; // ms
const ICONS = [
    {
        name: "tv",
        c1: [0.752, 0.739],
        c2: [0.764, 0.752],
        height: 0.18,
        imgProps: {draggable: true}
    },
    {
        name: "ct",
        clickBoxName: null,
        height: 0.434,
        c1: [0.544, 0.571],
        c2: [0.558, 0.586],
        imgProps: {draggable: false}
    },
    {
        name: "cf",
        height: 0.82,
        c1: [0.595, 0.426],
        c2: [0.605, 0.443],
        imgProps: {draggable: false}
    },
    {
        name: "well",
        height: 0.25,
        c1: [0.514, 0.822],
        c2: [0.533, 0.845],
        imgProps: {draggable: false}
    },
]


async function delay(time) {
    if (time > 0) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, time)
        })
    }
}
  


class AppView extends SvgPlus {
    async onconnect(){
        let t0 = performance.now();
        let elements = {
            video: ".trailer video",
            iconGroup: "icon-group",
            canvas: "canvas"
        }
        for (let name in elements) this[name] = this.querySelector(elements[name]);
        DF = await DF_promise;
        await DF.initialise(this.canvas);        
        window.addEventListener("mousemove", (e) => {
            this.canvas.prlx = DF.relative(e);
        })
        await this.iconGroup.loadIcons(ICONS);
        this.addEventListener("hoverleave", (e) => this.onIconHoverLeave(e))
        let d = MIN_LOADER_TIME - (performance.now() - t0);
        console.log(d);
        await delay(d)
        

        this.loading = false
    }

    set page(name){
        this.setAttribute("page", name);
    }

    set loading(bool) {this.toggleAttribute("loading", bool)}

    onIconHoverLeave(e){
        console.log(e.icon);
        if (e.icon.name == "cf") {
            let img = e.icon.img;
            e.icon.img = this.iconGroup.icons["ct"].img;
            this.iconGroup.icons["ct"].img = img;
        }
    }

    onclick(e) {
        if (e.icons) {
            console.log(e.icons);
            console.log(e.icons[0]);
            switch (e.icons[0].name) {
                case "well":
                    this.playTrailer();
                    break;

                case "cf": 
                    this.setAttribute("page", "credits")
            }
        }
    }

    playTrailer(){
        let {video} = this;
        video.currentTime = 0;
        video.play();
        this.page = "trailer"
        this.requestFullscreen()
        video.addEventListener("timeupdate", (event) => {
            if (video.currentTime > 21) {
                this.page = null;
            }
        });
    }
}


let phi = `<a href = "https://www.w4v.es" class = "logo"><video muted="" loop="" playsinline="" autoplay=""><source src="https://www.w4v.es/Assets/Lava_9.mp4"></video><svg class="logo-mask" viewBox="0 0 100 100">
<g class="dummy">
  <path d="M86.6,50c-3.1,14.9-19.4,27.2-37.5,29.3l-0.1,0.4c-1.4,6.2,5.4,6.4,10.2,6.4v5.8H25.9v-5.8
        c9.4,0,11.2-4.1,11.9-6.8l-0.1-0.1C21.1,76.9,10.4,64.7,13.5,50c3.1-14.7,19.1-26.9,37-29.2c0.6-6.5-3.9-7-13-7V8.2h36.7v5.7
        c-9.6,0-11.6,3.6-12.3,6.9C79,23,89.9,35.3,86.6,50z"></path>
</g>
<g class="mask">
    <path d="M60.8,25.8c-0.4,2.2-0.9,3.7-0.9,3.7l-0.9,4.1l-3,13.5l-5.4,25.5l-0.4,2C62,72.1,72.6,62,75.1,50.1
        C77.6,38.2,71.4,28.3,60.8,25.8z"></path>
    <path d="M25.1,50c-2.5,11.8,3.6,21.5,14,24.2l4.4-20.1L49,28.1l0.5-2.4C37.9,28.4,27.6,38.2,25.1,50z"></path>
    <path d="M0,0v100h100V0H0z M86.6,50c-3.1,14.9-19.4,27.2-37.5,29.3l-0.1,0.4c-1.4,6.2,5.4,6.4,10.2,6.4v5.8H25.9v-5.8
        c9.4,0,11.2-4.1,11.9-6.8l-0.1-0.1C21.1,76.9,10.4,64.7,13.5,50c3.1-14.7,19.1-26.9,37-29.2c0.6-6.5-3.9-7-13-7V8.2h36.7v5.7
        c-9.6,0-11.6,3.6-12.3,6.9C79,23,89.9,35.3,86.6,50z"></path>
</g>
</svg></a>`

class CreditsPage extends SvgPlus {
    async onconnect(){
        this.createChild("span", {class: "close", content: "x"}).onclick = () => {
            document.querySelector("app-view").setAttribute("page", null)
        }
        let data = await (await fetch("./credits.txt")).text();
        console.log(data);
        let text = data.replace(/\(([\w\s]+)\|([\s.\w]+)\)/g, `<a href = "https://instagram.com/$2">$1</a>`);
        text = text.replace(/\n/g, "<br/>")
        text = text.replace("\\phi", phi)
        this.createChild("div", {content: text})
    }
}

SvgPlus.defineHTMLElement(CreditsPage)
SvgPlus.defineHTMLElement(AppView)