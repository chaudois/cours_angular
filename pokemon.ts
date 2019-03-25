

class Pokemon {
	hp:any=100;
	name:any;
	speed:any;
	moves:any;
	nextMove:any;
	damages:any
  constructor(name,speed, _moves) {
  	this.name=name;
  	this.speed=speed;
  	this.moves=new Map();
  	for(let i in _moves){
  		this.moves.set(_moves[i][0],_moves[i][1]);
  	}
  }
  attack(Pokemon):void{
    console.log('damages of '+this.name +':'+this.moves.get(this.nextMove));
  	Pokemon.suffer(this.moves.get(this.nextMove));
  }
  suffer(damages):void{
  	this.hp=this.hp-damages
  }
}
module.exports=Pokemon;