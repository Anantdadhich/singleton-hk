interface Games{
    id:string,
    whitePlayer:string,
    blackPlayer:string,
    moves:string[];
}

//export const games:Games[]=[];

export class gameManager{
   games:Games[]=[];
  private static instance:gameManager;  //static means something which is associated with a class not an object 
   //for singleton pattern


  private constructor(){
    this.games=[]
  }
// method is used to retrieve the single instance of the GameManager
  static getInstance(){
    if(gameManager.instance){
      return gameManager.instance
    }
    gameManager.instance=new gameManager();
    return gameManager.instance
  }

  addMove(gameId:string,move:string){
    console.log()
    const game=this.games.find(game=>game.id===gameId);

    game?.moves.push(move)
  }
 public addGame(game
  :Games
 ){
    
    this.games.push(game)
  }

  public logstate(){
    console.log(this.games)
  }
}