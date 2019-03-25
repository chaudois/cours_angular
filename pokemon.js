var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, damages) {
        this.hp = 100;
        this.name = name;
        this.speed = speed;
        this.damages = damages;
        this.moves = new Map();
        /*for(let i in moves){
            this.moves.set(moves[i][0],moves[i][1]);
    
        }*/
    }
    Pokemon.prototype.attack = function (Pokemon) {
        Pokemon.suffer(this.damages);
    };
    Pokemon.prototype.suffer = function (damages) {
        this.hp = this.hp - damages;
    };
    return Pokemon;
}());
module.exports = Pokemon;
