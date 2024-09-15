import {gameManager} from "./store"
//to log every game in five second
export function StartLogger(){
setInterval(()=>{
gameManager.getInstance().logstate()
},5000);
}

