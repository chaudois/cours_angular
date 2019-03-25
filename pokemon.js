var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, _moves) {
        this.hp = 100;
        this.name = name;
        this.speed = speed;
        this.moves = new Map();
        for (var i in _moves) {
            this.moves.set(_moves[i][0], _moves[i][1]);
        }
    }
    Pokemon.prototype.attack = function (Pokemon) {
        console.log('damages of ' + this.name + ':' + this.moves.get(this.nextMove));
        Pokemon.suffer(this.moves.get(this.nextMove));
    };
    Pokemon.prototype.suffer = function (damages) {
        this.hp = this.hp - damages;
    };
    return Pokemon;
}());
module.exports = Pokemon;
