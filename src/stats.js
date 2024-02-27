import { SvgPlus } from "../SvgPlus/4.js";
import {initialise, watchRanks, watchViews} from "../src/user.js"

class StatsPage extends SvgPlus {
    async onconnect(){
        await initialise();
        watchRanks("e4e6", (d) => {
            this.ranks = d;
        });
        watchViews("e4e6", (d) => {
           this.views = d;
        })

        let w1 = this.createChild("div");
        w1.createChild("div", {class: "head", content: "Ranks"});
        let b1 = w1.createChild("div", {class: "body"});

        let w2 = this.createChild("div");
        w2.createChild("div", {class: "head", content: "Views"});
        let b2 = w2.createChild("div", {class: "body"});


        let t1 = b1.createChild("table");
        let t2 = b2.createChild("table");
        t1.createChild("thead").innerHTML = `<tr><td>${["name", "location", "rank"].join('</td><td>')}</td></tr>`
        t2.createChild("thead").innerHTML = `<tr><td>${["name", "time", "device"].join('</td><td>')}</td></tr>`
        
        this.t1b = t1.createChild("tbody");
        this.t2b = t2.createChild("tbody");
    }


    set views(views){
        this._views = views;
        if (this.views && this.ranks) this.update();
    }
    get views(){return this._views}
    set ranks(ranks){
        this._ranks = ranks;
        if (ranks && this.views) this.update();
    }
    get ranks(){return this._ranks}

    update(){
        let {views, ranks} = this;
        console.log(ranks);
        let rank_table = [];
        let view_table = [];
        let names = {};
        for (let user of ranks) {
            names[user.uid] = user.name;
            rank_table.push([user.name, `${user.city}, ${user.country}`, user.rank]);
        }
        let i = 1;
        views = Object.keys(views).map(k => views[k]).sort((a, b) => a.time < b.time ? 1 : -1);
        console.log(names);
        for (let view of views) {
            let name = "user-" + i;
            let device = view.agent.match(/[(]([^)]+)[)]/)[1];
            let t = new Date(view.time);
            let date = t.toDateString() + ' '+ t.toLocaleTimeString()
            if (view.uid in names) name = names[view.uid];
            else { 
                names[view.uid] = name; 
                i++;
            }

            view_table.push([name, date, device]);
        }

        this.t1b.innerHTML = rank_table.map(a => `<tr><td>${a.join('</td><td>')}</td></tr>`).join("\n");
        this.t2b.innerHTML = view_table.map(a => `<tr><td>${a.join('</td><td>')}</td></tr>`).join("\n");
    }

}


SvgPlus.defineHTMLElement(StatsPage)