//here we simulate the updating the state

import { StartLogger } from "./logger"
import { gameManager } from "./store";

//it will log the state
StartLogger();
setInterval(()=>{
  gameManager.getInstance().addGame({
    id:Math.random().toString(),
    whitePlayer:"alice",
    blackPlayer:"bob",
      moves:[]
  })
},5000)