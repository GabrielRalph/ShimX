import { SvgPlus } from "../SvgPlus/4.js";
import { } from "./icons.js";
import { } from "./ranks.js"
import { } from "./credits-page.js"
import { } from "./about-page.js"

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
        name: "t",
        imgName: null,
        height: 0.145,
        c1: [0.627, 0.715],
        c2: [0.627, 0.715],
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


function getURLPage(){
    let hash = window.location.hash.replace("#", "");
    if (hash.length == 0) hash = null;
    return hash;
}
function setURLPage(name) {
    window.location = window.location.origin + (name == null ? "/#" : '/#' + name);
}

class AppView extends SvgPlus {
    async onconnect(){
        let t0 = performance.now();
        let elements = {video: ".trailer video", iconGroup: "icon-group",canvas: "canvas",ranks: "keader-board"}
        for (let name in elements) this[name] = this.querySelector(elements[name]);
        
        // Add video fade event listener
        let {video} = this;
        video.addEventListener("timeupdate", (event) => {
            if (video.currentTime > 21) {
                this.page = null;
            }
        });
        
        // Wait for async initialisers to load in parral
        for (let p of [this.initialiseDepthFader(), this.initialiseIcons()]) await p;
       
        // Show splash screen for a minimum time
        let d = MIN_LOADER_TIME - (performance.now() - t0);
        await delay(d)

        this.page = getURLPage();
        window.addEventListener("hashchange", (e) => {
            this.page = getURLPage();
        })

        // Loading is complete
        this.loading = false
    }

    set page(name){
        if (this._page != name) {
            this._page = name;
            setURLPage(name)
            this.setAttribute("page", name);
        }
    }

    set loading(bool) {this.toggleAttribute("loading", bool)}

    async initialiseDepthFader(){
        // Wait for the depth fader package to load
        DF = await DF_promise;

        // Initialise depth fader i.e. download textures
        await DF.initialise(this.canvas);       
        
        // Add mouse event to change paralax
        window.addEventListener("mousemove", (e) => { 
            this.canvas.prlx = DF.relative(e);
        })
    }

    async initialiseIcons(){
        await this.iconGroup.loadIcons(ICONS);
        this.addEventListener("hoverleave", (e) => this.onIconHoverLeave(e))
    }

    onIconHoverLeave(e){
        if (e.icon.name == "cf") {
            let img = e.icon.img;
            e.icon.img = this.iconGroup.icons["ct"].img;
            this.iconGroup.icons["ct"].img = img;
        }
    }

    onclick(e) {
        if (e.icons && e.icons.length > 0) {
            switch (e.icons[0].name) {
                case "tv":
                    this.playTrailer();
                    break;

                case "cf": 
                    this.page = "credits";
                    break;

                case "t": 
                    this.page = "ranks";
                    break;

                case "well": 
                    this.page = "about";
                    break;
            }
        } else if (e.close === true) {
            this.page = null;
        }
    }

    playTrailer(){
        let {video} = this;
        video.currentTime = 0;
        video.play();
        this.page = "trailer"
        this.requestFullscreen()
    }
}


SvgPlus.defineHTMLElement(AppView)