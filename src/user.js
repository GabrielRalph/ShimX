const firebaseConfig = {
    apiKey: "AIzaSyBI13TKjc4WD4Riq9uTRVzileI-0cPsw-w",
    authDomain: "myiot-41369.firebaseapp.com",
    databaseURL: "https://myiot-41369.firebaseio.com",
    projectId: "myiot-41369",
    storageBucket: "myiot-41369.appspot.com",
    messagingSenderId: "201145539454",
    appId: "1:201145539454:web:0b303d89bb6155c43b312f"
  };

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import {  getAuth, onAuthStateChanged, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getDatabase, child, push, ref as _ref, get, onValue, onChildAdded, set} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'

let initialised = false;
let userInitialised = false;
let App = null;
let Database = null;
let Auth = null;
let User = null;

// Generates a random key to use as the device's unique identifier DUID.
function makeRandomKey() {
    return (Math.round(Math.random() * 100000)).toString(32) + Math.round(performance.now() * 1000).toString(32) + (Math.round(Math.random() * 100000)).toString(32);
}

/* If a DUID already exists in local storage retreive that key otherwise generate a new key 
   and store in local storage. */
let DUID = localStorage.getItem('duid');
if (DUID == null) {
    DUID = makeRandomKey();
    localStorage.setItem('duid', DUID);
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PUBLIC FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*  Initialize firebase, initializes the firebase app with the given configuration
    after initializing wait for an auth state change and return */
export async function initialise(config = firebaseConfig) {
    if (initialised) return;
    initialised = true;
    App = initializeApp(config);
    Database = getDatabase(App);
    Auth = getAuth();
    return new Promise((resolve, reject) => {
        signInAnonymously(Auth)
        onAuthStateChanged(Auth, async (userData) => {
            User = userData;
            if (User != null) {
                console.log("user has been signed", userData);
                resolve();
            } else {
                signInAnonymously(Auth)
            }
        });
    });
}





// Get user uid, if none exists then the DUID is returned instead
export function getUID() {
    let uid = DUID;
    if (User != null && typeof User !== "string") {
        uid = User.uid;
    }
    console.log(User);
    return uid;
}

// Get user data object
export function getUser() { return User; }

// Get App object
export function getApp() { return App; }

// Get Database object
export function getDB() { return Database; }



// Get Ref using database
export function ref(path) { return _ref(Database, path); }

export async function hasRanked(secretKey){
    let ranked = true
    if (User != null && Database != null) {
        let rankRef= ref(secretKey + "/rank")
        let ranks = (await get(rankRef)).val();
        if (ranks == null) ranked = false;
        else ranked = ranks.indexOf(getUID()) != -1
    }
    return ranked
}

export async function addRanking(secretKey, info = null){
    let leaderBoard = []
    if (User != null && Database != null) {
        try {
            let rankRef= ref(secretKey + "/rank")
            let ranks = (await get(rankRef)).val();
            let newRanks = getUID();;
            if (ranks != null)  newRanks =  ranks + "," + getUID();
            
            await set(ref(secretKey + "/" + getUID()), info);
            await set(rankRef, newRanks);
        } catch (e) {
            console.log("already ranked");
        }
    }
    return leaderBoard
}

export async function watchRanks(secretKey, cb) {
    if (cb instanceof Function){
        return new Promise((resolve, reject) => {
            onValue(ref(secretKey), (sc) => {
                let allData = sc.val();
                let leaderBoard = [];
                if (allData != null) {
                    let i = 1;
                    leaderBoard = allData.rank.split(",").map(id => {
                        let person = allData[id]
                        person.me = id == getUID();
                        person.rank = i; 
                        i++; 
                        return person;
                    })
                }
                cb(leaderBoard);
                resolve();
            })
        })
    }
}





export {child, get, push, set, onChildAdded, onValue }
