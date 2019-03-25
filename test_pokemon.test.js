const  pokemon=require('./pokemon.js');	
battle=require('./pokemon_battle.js');	
tortank=new pokemon('Tortank',2,120);
magmar=new pokemon('Magmar',3, 10);

test('Tortank speed is 2', () => {

  expect(tortank.speed).toBe(2);
});
test('Magmar speed is 3', () => {

  expect(magmar.speed).toBe(3);
});

test('Tortank éclate Magmar',()=>{
	tortank.nextMove='Hydrocanon';
	magmar.nextMove='Flammeche';
	battle(tortank,magmar);
	expect(tortank.hp).toBeGreaterThan(0);
	expect(magmar.hp).toBeLessThan(0);
});