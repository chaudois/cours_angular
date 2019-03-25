const  pokemon=require('./pokemon.js');	
battle=require('./pokemon_battle.js');	
tortank=new pokemon('Tortank',2,[['Hydrocanon',120],['Surf',60]]);
magmar=new pokemon('Magmar',3, [['Flameche',10]]);

test('Tortank speed is 2', () => {

  expect(tortank.speed).toBe(2);
});
test('Magmar speed is 3', () => {

  expect(magmar.speed).toBe(3);
});

test('Tortank éclate Magmar',()=>{
	tortank.nextMove='Hydrocanon';
	magmar.nextMove='Flameche';
	battle(tortank,magmar);
	expect(tortank.hp).toBeGreaterThan(0);
	expect(magmar.hp).toBeLessThan(0);
});