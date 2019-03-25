

class Pokemon {
	hp:any=100;
	name:any;
	speed:any;
	moves:any;
	nextMove:any;
	damages:any
  constructor(name,speed, damages) {
  	this.name=name;
  	this.speed=speed;
  	this.damages=damages;
  	this.moves=new Map();
  	/*for(let i in moves){
  		this.moves.set(moves[i][0],moves[i][1]);

  	}*/
  }
  attack(Pokemon):void{
  	Pokemon.suffer(this.damages);
  }
  suffer(damages):void{
  	this.hp=this.hp-damages
  }
}
module.exports=Pokemon;