import { SvgPlus } from "../SvgPlus/4.js";

const TEMPLATE = `
    <div class = "close" onclick = "event.close = true">X</div>
    <div class = "page">
        <img class="p2" src="./Assets/about/t_intro.svg">
    </div>
    <div class = "page">
        <div class = "row">
            <img src="./Assets/about/burger-1.jpg">
            <img src="./Assets/about/burger-2.jpg">
        </div>
    </div>
    <div class = "page">
        <img class="p2" src="./Assets/about/t_about.svg">
    </div>
    <div class = "page">
        <div class = "slides">
            <img src="./Assets/about/bts-2.jpg">
            <img src="./Assets/about/bts-3.jpg">
            <img src="./Assets/about/bts-4.jpg">
        </div>
</div>
`
async function frame(){return new Promise((resolve) => {window.requestAnimationFrame(resolve)})};

let wdy = 0;
window.addEventListener("wheel", (e) => {
    wdy = e.deltaY*0.7;
    console.log('x');
})



let pagei = 0;
let y = 0;
let nextDir = 1;
class AboutPage extends SvgPlus {
    onconnect() {
        this.innerHTML = TEMPLATE;
        let moving = false;
        this.onclick = async () => {
            if (!moving) {
                moving = true;
                let dir = nextDir;
                for (let i = 0; i < Math.PI/2; i+=0.05) {
                    wdy = dir*(30)*Math.sin(i);
                    await frame();
                }
                moving = false;
            }
        }
        this.updateScroll();
    }
    async updateScroll(){
        let stop = false;
        while (!stop) {
            let npages = this.children.length;
            let h = this.clientHeight;
            let hmax = this.scrollHeight;
    
            let npagei = Math.round(y/h);
            if (npagei == npages-1 && pagei == npages-2) nextDir = -1;
            else if (npagei == 0 && pagei == 1) nextDir = 1;
            pagei = npagei;
    
            let sdy = 0;
            let yoff = (y%h)/h;
            if (wdy > 0) {
                sdy = yoff < 0.4 ? -14 * yoff : 28* (1 - yoff);
            } else {
                sdy = yoff < 0.6 ? -28 * yoff : 14 * (1 - yoff);
            }
    
            y += wdy + sdy;
            if (y < 0) {
                y = 0;
                wdy = 0;
            } else if (y > hmax) {
                y = hmax;
                wdy = 0;
            }
            
            this.scrollTop = y;
            wdy = wdy *0.2
            // let t0 = performance.now();
            await frame();
            // let t1 = performance.now();
            // console.log(t1- t0)
        }
    }
}

SvgPlus.defineHTMLElement(AboutPage);