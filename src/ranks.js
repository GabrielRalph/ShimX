import { SvgPlus } from "../SvgPlus/4.js";
import {getLocation} from "./location.js"
import {initialise, addRanking, hasRanked, watchRanks} from "./user.js"
const key = "e4e6";

class LeaderBoard extends SvgPlus {
    async onconnect(){
        this.innerHTML = `
        <div id = "table" class = "window">
            <div class = "head"><h3>ERROR: Congratulations</h3> <br> You are the <em></em>th person in the world who has solved X</div>
            <div class = "body">
                <table><thead><tr><th>Rank</th><th>Name</th><th>Country</th></tr></thead><tbody></tbody></table>
                <div><b class = "btn" name = "close">close</b></div>
            </div>
        </div>
        <div id = "input" class = "window" >
            <div class="head">Please Make a Codename.</div>
            <div class="body">
                <span>Codename:</span><input class = "btn" type = "text" name = "name"><b class = "btn" name = "submit">SUBMIT</b>
            </div>
        </div>
        <div id = "loader" class = "window" >
            <div class="head">Connecting to Leaderboard</div>
            <div class="body">
                <div class = "msg">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
            </div>
        </div>
        `
        this.mode = "loading"
        this.me = this.querySelector("em");
        this.tbody = this.querySelector("tbody");
        let submit = this.querySelector("[name='submit']");
        let input = this.querySelector("input");
        let close = this.querySelector(".btn[name = 'close']");
        close.onclick = (e) => e.close = true;
       
        await initialise();

    
        if (await hasRanked(key)) {
            watchRanks(key, (e) => this.renderRanks(e));
        } else {
            this.mode = "prompt"
            let info = getLocation();
            let set = false;
            let setRanks = async () => {
                if (!set) set = true;
                else return;
                this.mode = "loading";
                info = await info;
                info.name = input.value
                await addRanking(key, info)
                watchRanks(key, (e) => this.renderRanks(e));

            }
            submit.onclick = setRanks
            input.addEventListener("keyup", (e) => {
                if (e.key == "Enter") setRanks();
            })
        }
       
    }

    set mode(mode) {if(mode == null) this.removeAttribute("mode"); else this.setAttribute("mode", mode);}

    renderRanks(ranks){
        let html = ""
        for (let rank of ranks) {
            let row = "";
            for (let key of ["rank", "name", "country"]) row += `<td>${rank[key]}</td>`
            html += `<tr ${rank.me ? "me" : ""}>${row}</tr>`
            if (rank.me) {
                this.me.innerHTML = rank.rank
            }
        }
        this.tbody.innerHTML = html;
        this.mode = null;
    }
}

SvgPlus.defineHTMLElement(LeaderBoard)