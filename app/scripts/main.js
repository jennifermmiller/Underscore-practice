// Some fun with Underscore.js
console.log('Below are my examples of underscore functions.');
console.log('They were applied to varibles: testArrayOne, testArrayTwo, testArrayThree, listOfMovies, and pepsi.');
console.log('1. _.initial(testArrayOne);');
console.log('2. _.last(testArrayOne);');
console.log('3. _.compact(testArrayOne);');
console.log('4. _.without(testArrayOne,[23,78,false]);');
console.log('5. _.flatten(testArrayTwo)');
console.log('6. _.union(testArrayOne,testArrayThree);');
console.log('7. _.intersection(testArrayOne,testArrayThree);');
console.log('8. _.indexOf(testArrayThree,"vroom");');
console.log('9. _.find([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0});');
console.log('10. _.filter([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0})');
console.log('11. _.reject([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0});');
console.log('12. _.where(listOfMovies, {actor: "Kermit"});');
console.log('13. _.contains(testArrayOne, 87593543859345);');
console.log('14. _.pluck(listOfMovies, "actor");');
console.log('15. _.shuffle(testArrayTwo);');
console.log('16. _.size(listOfMovies);');
console.log('17. _.omit(pepsi, "container");');
console.log('18. _.invert(pepsi);');
console.log('19. _.has(pepsi, "color");');
console.log('20. _.defaults(pepsi,{flavor: "cola", serveOnIce: true, sugar: true});');

//A few arrays and objects to work with:
var testArrayOne = [23,0,578,'green',{name:'Jen', pet: 'Mittens'}, 78, 905898, '', false, [4,3,'yummy']];

var testArrayTwo = [['apple', ['milk', 'cheese'], 'bananas', 45674], true, false, {dog: 'roof', cat: 'meow'}];

var testArrayThree = [76, 234857934, 0, '', 'vroom', 'book', {bank: 'piggie', money: 'pennies'}];

var listOfMovies = [
{
	title:'The Muppets',
	actor:'Kermit',
	year:1965
},
{
	title:'Meatballs',
	actor:'Noodles',
	year:1999
},
{
	title:'Coffee and Cigerettes',
	actor:'Kermit',
	year:2019
},
{
	title:'Nap Time',
	actor:'Oscar',
	year: 1940
}];

var pepsi = {
	color: 'brown',
	container: 'plastic',
	carbination: true,
	servingSize: '8 oz',
	calories: 180
};


//Example 1: _.initial(array,[n]) should return all of the values in an array except the last one. If you include [n], it will excclude the last n elements
_.initial(testArrayOne);
	//Returns testArrayOne without [4,3,'yummy']
_.initial(testArrayOne,c4);
	//Returns [23,0,578,'green',{name:'Jen', pet: 'Mittens'}, 78]


//Example 2: _.last(array, [n]) will do the opposite of _.itiial.
_.last(testArrayOne);
	//Returns	[4,3,'yummy']]
_.last(testArrayOne, 4);
	//Returns [905898, '', false, [4,3,'yummy']]


//Example 3: _.compact(array) removes any falsy values in an array. (false, '', NaN, 0, null, undefined)
_.compact(testArrayOne);
	//Returns [23, 578,'green',{name:'Jen', pet: 'Mittens'}, 78, 905898, [4,3,'yummy']];
_.compact(testArrayTwo);
  //Returns [['apple', ['milk', 'cheese'], 'bananas', 45674], true, {dog: 'roof', cat: 'meow'}];


//Example 4: _.without(array, [values]) allows you to remove specified values from an array
_.without(testArrayOne,[23,78,false]);
	//Returns [23, 578, "green", Object, 78, 905898, Array[3]]
_.without(testArrayTwo, [0,'vroom','book']);
	//Returns [Array[4], true, Object]


//Example 5: _.flatten(array,[shallow]) removes any nested arrays. If shallow is passed, will only remove one level of nested.
_.flatten(testArrayTwo);
	//Returns var testArrayTwo = ['apple', 'milk', 'cheese', 'bananas', 45674, true, false, {dog: 'roof', cat: 'meow'}];
_.flatten(testArrayTwo, true);
	//Returns var testArrayTwo = ['apple', ['milk', 'cheese'], 'bananas', 45674, true, false, {dog: 'roof', cat: 'meow'}];


//Example 6: _.union(arrays) puts all unique items into a single array in the order given
_.union(testArrayOne,testArrayThree);
	//Returns [23, 0, 578, "green", Object, 78, 905898, "", false, Array[3], 76, 234857934, "vroom", "book", Object]


//Example 7:_.intersection(arrays) is quite similar but instead, it returns an array of any matching values.
_.intersection(testArrayOne,testArrayThree);
	//Returns [0, ""]


//Example 8: _.indexOf(array, values, [isSorted]) returns the index at which the value can fe found or a -1 if it is not part of the array. 
//					Not sure if I'm totally clear on the [isSorted] bit but, if a true value is passed, it's assumed that the array is already sorted and does a binary search for the value.
//					If a number is passed for [isSorted], the searh for the value begins after that index.
_.indexOf(testArrayThree,'vroom');
	//Returns 4
_.indexOf(testArrayThree,'baby');
	//Returns -1
_.indexOf(testArrayThree,'vroom',6);
  //Returns -1


//Example 9: _.find(list,iterator, [context]) starts at the beginning of the list and looks at each item until it find one that returns truth when passed throught the iterator.
//           (returns undefined if no exceptable value is found)
_.find([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0});
	//Returns 45


//Example 10: // _.filter(list iterator, [coxtext]) Similar to _.find but it returns all values that return true when passed through the iterator
_.filter([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0});
	//Returns [45, 90, 3940, 387425]


//Example 11:_.reject(list iterator, [coxtext]) is opposite _.filter and returns all value that do not return true when pass through the iterator
_.reject([1,23,45,78,90,3940,387425], function(numb){return numb % 5 == 0});
	//Returns [1, 23, 78]


//Example 12: _.where(list, properties) looks through each list item and returns an array of all the values that contain the give properties.
_.where(listOfMovies, {actor: 'Kermit'});
	//Returns: [{title:'The Muppets', Actor:'Kermit', year:1965},{title:'Coffee and Cigerettes', Actor:'Kermit', year:2019}]


//Example 13: _.contains(list, value) Returns true if the value is found in the list;
_.contains(testArrayOne, 87593543859345);
	//Returns false
_.contains(testArrayOne, 'green');
	//Returns true


//Example 14: _.pluck(list, propertyName) rextracts a list of property values
_.pluck(listOfMovies, 'actor');
	//Returns ["Kermit", "Noodles", "Kermit", "Oscar"]


//Example 15: _.shuffle(list) returns a shuffled copy of the list
_.shuffle(testArrayTwo);


//Example 16: _.size(list) Returns the number of values in list
_.size(listOfMovies);
	//Returns 4
_.size(testArrayOne);
	//Returns 10


//Example 17: _.omit(object,keys) Returns a copy of the object that omits the desired key(s)
_.omit(pepsi, 'container');
	//Returns {color: "brown", carbination: true, servingSize: "8 oz", calories: 180}


//Example 18: _invert(object) Returns an objects where values are now properties and vice versa
_.invert(pepsi);
	//Returns {180: "calories", brown: "color", plastic: "container", true: "carbination", 8 oz: "servingSize"}


//Example 19: _.has(object, key) Searches for desired property within the object, returns true is it is present and false if it is not.
_.has(pepsi, 'color');
	//Returns true

_.has(pepsi, 'protein');
	//Returns false


//Example 20: _.defaults(object, defaults) fills in any properties that were previously undefined with defualt properties then returns the object.
_.defaults(pepsi,{flavor: 'cola', serveOnIce: true, sugar: true});
  //Returns {calories: 180, carbination: true, color: "brown", container: "plastic", flavor: "cola", serveOnIce: true, servingSize: "8 oz", sugar: true}

