class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
   this.name = null;
   this.rank = null;
  }


  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
 ///////////////////////////////////////////////////////////////////
// We use this to code for to get the cars at the end.
  

    //database.ref -  to get the refrence from the database. 
    //.on -  to keep listening to the data in the database
    //value -  to get the value of cars at the end from database
    //=> -  to invoke the function
    //this.rank -  to update the rank propert of player in the database
    //data.val - value which is taken from database and stored in rank
  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val()
    })
  }


// to update the rank 
  static updateCarsAtEnd(rank) {
    // This is to get the refrence of the database and to update.
    database.ref('/').update({
// This is for after the game at the last we will get the rank.
      CarsAtEnd:rank
    })
  }

  ///////////////////////////////////////////////////////////////////////////
}
  