let name = 'bhavesh';
const repoCount = 50;


console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

let gameName = new String('RC_Cricket_2024');
console.log(gameName[0]);
console.log(gameName[1]);
// console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.toString());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('C'));


const newString = gameName.substring(0,7);
console.log(newString);

const anotherString = gameName.slice(-8, 3);
console.log(anotherString.slice(-8, 3)); 

//slice() is use for to add negative value in String ,it means they can reverse the string:

const newStringOne = "       Bhavesh     "
console.log(newStringOne);
const newStringOnes = "       Bhavesh     "
console.log(newStringOnes.trim());
console.log(newStringOnes.trimStart());
console.log(newStringOnes.trimEnd());


//basically trim() is to remove the Empty spaces of String:

const url = "//https.bhavesh//bhavesh%20Sonawane";
console.log(url.replace('%20' , '-' ));



