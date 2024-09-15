import {RedisClientType,createClient} from 'redis'


export class PubManager{
  private static instance:PubManager;
   private redisClient:RedisClientType;
   private subscriptiions:Map<string,string[]>
  private constructor(){
      this.redisClient=createClient();
      this.redisClient.connect();
      this.subscriptiions=new Map()
  }

  public static getinstance():PubManager{
    if(!PubManager.instance){
        PubManager.instance=new PubManager()
    }
    return PubManager.instance
  }
    
  adduserToStock(userid:string,stocker:string){
     if(!this.subscriptiions.has(stocker)){
        this.subscriptiions.set(stocker,[])
     }

     this.subscriptiions.get(stocker)?.push(userid)

     if(this.subscriptiions.get(stocker)?.length===1){
        this.redisClient.subscribe(stocker,(message)=>{
            this.forwardMessage(stocker,message)
        });
        console.log(`${stocker}`)
     }
  }

    public userUnSubscribe(userid: string, stocker: string) {
        this.subscriptiions.set(stocker, this.subscriptiions.get(stocker)?.filter((sub) => sub !== userid) || []);

        if (this.subscriptiions.get(stocker)?.length === 0) {
            this.redisClient.unsubscribe(stocker);
            console.log(`UnSubscribed to Redis channel: ${stocker}`);
        }
    }

  forwardMessage(stocker:string,message:string){

  }

}