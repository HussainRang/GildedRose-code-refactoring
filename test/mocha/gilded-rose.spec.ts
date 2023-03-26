import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  
  context('if name is Aged Brie',function(){

		context('quality = 0',function(){

			it('sellIn = -1', () => {
				test('Aged Brie',-1,0,-2,2);
			});
			
			it('sellIn = 0', () => {
				test('Aged Brie',0,0,-1,2);
			});
			
			it('sellIn = 1', () => {
				test('Aged Brie',1,0,0,1);
			});

		})
		
		
		context('\nquality = -10',function(){

			it('sellIn = -1', () => {
				test('Aged Brie',-1,-10,-2,-8);
			});
			
			it('sellIn = 0', () => {
				test('Aged Brie',0,-10,-1,-8);
			});
			
			it('sellIn = 1', () => {
				test('Aged Brie' , 1,-10,0,-9);
			});

		})
		
		
		context('\nquality = 49',function(){

			it('sellIn = -1', () => {
				test('Aged Brie',-1,49,-2,50);
			});
			
			it('sellIn = 0', () => {
				test('Aged Brie',0,49,-1,50);
			});
			
			it('sellIn = 1', () => {
				test('Aged Brie',1,49,0,50);
			});

		})
		
		
		context('\nquality = 50',function(){

			it('sellIn = -1', () => {
				test('Aged Brie',-1,50,-2,50);
			});
			
			it('sellIn = 0', () => {
				test('Aged Brie',0,50,-1,50);
			});
			
			it('sellIn = 1', () => {
				test('Aged Brie',1,50,0,50);
			});

		})
		
		
		context('\nquality = 51',function(){

			it('sellIn = -1', () => {
				test('Aged Brie',-1,51,-2,51);
			});
			
			it('sellIn = 0', () => {
				test('Aged Brie',0,51,-1,51);
			});
			
			it('sellIn = 1', () => {
				test('Aged Brie',1,51,0,51);
			});

		})
    
  })
  
  

  context('if name is Backstage passes to a TAFKAL80ETC concert',function(){

	let name = 'Backstage passes to a TAFKAL80ETC concert';
	context('if quality = -10',function(){
		let quality = -10;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,-7);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,-8);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,-8);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,-9);
		})

	})


	
	context('if quality = 0',function(){
		let quality = 0;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,3);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,2);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,2);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,1);
		})

	})



	context('if quality = 47',function(){
		let quality = 47;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,50);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,49);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,49);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,48);
		})

	})



	context('if quality = 48',function(){
		let quality = 48;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,50);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,50);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,50);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,49);
		})

	})



	context('if quality = 49',function(){
		let quality = 49;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,50);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,50);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,50);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,50);
		})

	})


	context('if quality = 50',function(){
		let quality = 50;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,50);
		})

		it('sellIn = 6',function(){
			test(name,6,quality,5,50);
		})

		it('sellIn = 8',function(){
			test(name,8,quality,7,50);
		})

		it('sellIn = 11',function(){
			test(name,11,quality,10,50);
		})

	})
  })


  context('if name is Sulfuras, Hand of Ragnaros',function(){

	let name = 'Sulfuras , Hand of Ragnaros';

	context('if quality = -10',function(){
		let quality = -10;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,quality);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,quality);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,quality)
		})
		
		it('sellIn = 5',function(){
			test(name,5,quality,4,quality)
		})
	})
	

	context('if quality = 0',function(){
		let quality = 0;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,quality);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,quality);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,quality)
		})

		it('sellIn = 5',function(){
			test(name,5,quality,4,quality)
		})
	})


	context('if quality = 1',function(){
		let quality = 1;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,0)
		})

		it('sellIn = 5',function(){
			test(name,5,quality,4,0)
		})
	})
	

	context('if quality = 10',function(){
		let quality = 10;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,8);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,8);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,9)
		})

		it('sellIn = 5',function(){
			test(name,5,quality,4,9)
		})
	})


  })


  context('if name is something else',function(){
	let name = 'abc';

	context('if quality=0',function(){
		let quality=0;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,0);
		})

	})


	context('if quality=1',function(){
		let quality=1;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,0);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,0);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,0);
		})

	})



	context('if quality=10',function(){
		let quality=10;

		it('sellIn = -1',function(){
			test(name,-1,quality,-2,8);
		})

		it('sellIn = 0',function(){
			test(name,0,quality,-1,8);
		})

		it('sellIn = 1',function(){
			test(name,1,quality,0,9);
		})

	})


  })



});




function test(name:String ,sellIn:Number , quality:Number , updated_expected_sellIn:Number , updated_expected_quality:Number )
{
	const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
	const items = gildedRose.updQual();
	console.log(items[0]);
	expect(items[0].sellIn).to.equal(updated_expected_sellIn);
	expect(items[0].quality).to.equal(updated_expected_quality);
}