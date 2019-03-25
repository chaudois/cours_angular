require('./pokemon.js');
function whoAttackFirst(pokemon1, pokemon2) {
    if (pokemon1.speed > pokemon2.speed) {
        return pokemon1;
    }
    else {
        return pokemon2;
    }
}
function battle(pokemon1, pokemon2) {
    //on met les pokemon dans l'ordre d'attaque
    if (whoAttackFirst(pokemon1, pokemon2).name == pokemon2.name) {
        var tmp = pokemon1;
        pokemon1 = pokemon2;
        pokemon2 = tmp;
    }
    pokemon1.attack(pokemon2);
    pokemon2.attack(pokemon1);
}
module.exports = battle;
