// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var fullName = lastName + ", " + firstName;
// console.log(fullName);
//
// var age = prompt('What is your age?');
// age *= 1;
//
// if(age > 20){
//   console.log('you can drink alcohol...legally ;)');
// }
// else{
//   console.log('you are too young to drink');
// }
//
// if(age >= 0 && age < 6){ //between 0 and 5
//   console.log('Movie: G')
// } else if(age >= 6 && age < 13){
//   console.log('Movie: PG')
// }else if(age >= 13 && age < 18){
//   console.log('Movie: PG-13')
// }
// else console.log('Movie: R');
// debugger;

// var color = prompt('What is your favorite color?');
// color = color.toLowerCase();
//
// switch(color){
// case 'blue':
//   console.log(color + ' is awesome');
//   break;
// case 'red':
//     console.log(color + ' is awesome');
//     break;
// case 'orange':
//   console.log(color + ' is awesome');
//   break;
// case 'green':
//   console.log(color + ' is awesome');
//   break;
// case 'yellow':
//   console.log(color + ' is awesome');
//   break;
// case 'purple':
//   console.log(color + ' is awesome');
//   break;
// case 'indigo':
//   console.log(color + ' is awesome');
//   break;
// case 'violet':
//   console.log(color + ' is awesome');
//   break;
// }

// var num = prompt('Enter a number');
// num *= 1;
//
// // if(num > 0 && num < 10){
// //   while(num < 50){
// //     console.log('Number: ' + num);
// //     num += 2;
// //   }//end while
// // }
//
// for(num; num < 50; num++) console.log('Number: ' + num);


// var colors = [];
// var prom = prompt('Enter a color, or "q" to quit');
// prom = prom.toLowerCase();
// if(prom != 'q') colors.push(prom);
//
// while(prom != 'q'){
//   var prom = prompt('Enter a color, or "q" to quit');
//   prom = prom.toLowerCase();
//   if(prom === 'q') continue;
//   else colors.push(prom);
// }
//
// console.log("Here are your colors:");
//
// for(var i=0; i< colors.length; i++){
//   console.log("  " + colors[i]);
// }

// var evenSquares = [];
// var oddCubes = [];
//
// for(var i=1; i <=100; i++){
//   if(i%2 === 1) oddCubes.push(i*i*i);
//   else evenSquares.push(i*i);
// }
//
// console.log("Printing evenSquares:");
// for(var j=0; j < evenSquares.length; j++) console.log("  " + evenSquares[j]);
//
// console.log("Printing oddCubes:");
// for(var k=0; k < oddCubes.length; k++) console.log("  " + oddCubes[k]);


function square(x){
  return x*x;
}

function cube(x){
  return Math.pow(x,3);
}

function isOdd(x){
  return x%2;
}

function area(l, w){
  return l*w;
}

function volume(l,w,h){
  return area(l,w)*h;
}

var z = square(3) + cube(9) - area(3,4) * volume(5,6,7);
var y = cube(square(3)-cube(2));
var x = area(square(cube(2)), cube(square(3)));
console.log(x);
