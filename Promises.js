//Promise is behave like a object .
//promise 1:

// const promiseOne = new Promise(function(resolve, reject){
   
//     setTimeout(function() {
//         console.log('Async taks is completed');
//         resolve();
//     }, 4000);
// })
// promiseOne.then(function(){
//     console.log("Promise comsumed");
    
// })
// //promise 2:
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task is executing');
//         resolve();
        
//     }, 1000)
// }).then(function(){
//     console.log('Async to resolve');
    
// })
//promise 3:
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('data is accepted');
//     resolve({username : 'bhavesh', Div : 'B' })
   
        
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

//promise 4:

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({Username: 'bhavesh' , password:'Brs@123' })

//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
    
// }).finally(()=>{
//     console.log("the promise is either resolve or reject ");
    
// })

//promiseFive
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Raj",Age:'18'})
        }else{
          reject('Something Went Wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()
