
//Javascript Defination : Javascript is a dynamically Typed language.Because data type will automatically assigned at the time of compilation or code execution.

//primitive Datatype

// 7 types : 1] String , 2] Number , 3] Boolean , 4] Null , 5] Undefined , 6] Symbol , 7] BigInt



//Reference Type - Non-Primitive

// Arrays , Objects , Functions


const score = 99
const num = 10.2
let name =  'bhavesh';
var userEmailId = 'bhavesh123@gmail.com'
const Id = 29198048302;


console.table([score,num,name,userEmailId,Id]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//stack => primitive and Heap => Non- Primitive 


let parlourName ='RajMensParlour';
let anotherparlourName = parlourName;
console.log(anotherparlourName);
anotherparlourName = 'jayHarimensParlour';
console.log(anotherparlourName);
console.log(parlourName);

let user_first = {
userName :'bhavesh_Sonawane'
,
email :'bhavesh123@gmail.com' ,
upiId : 'bhavesh@ybl.com',
UPI_Name : 'Phonepay'


}
let user_second = user_first;
user_second.email = 'brs@gmail.com'
console.log(user_second.email);
console.log(user_first.email);