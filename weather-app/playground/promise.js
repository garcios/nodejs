
/*
var somePromise = new Promise((resolve, reject) =>{

  setTimeout(() =>{
    resolve('Hey. It worked!');
    //reject('Unable to fulfill promise');
  }, 2500); 
  
});

somePromise.then((message)=>{
  console.log('Success: ' , message);
}).catch(e => {
    console.log(e);
});
*/


var asyncAdd = (a,b) => {
   return new Promise((resolve, reject) => {
      setTimeout(()=>{
            if (typeof a === 'number' && typeof b == 'number'){
                resolve (a + b);
            }else{
                reject('Arguments must be numbers');
            }
      }, 1500);
   });

};

/*
console.log('Adding 2 numbers');
asyncAdd(5, 7).then( (result) => {
   console.log(result);
});

console.log('Adding a string and a number');
asyncAdd('oscar', 7).then( (result) => {
    console.log(result);
 }).catch(e => {
    console.log(e); 
 });
 */

 //chaining promises
 asyncAdd(5, 7).then( (result) => {
    return asyncAdd(result, 1);
 }).then( (result2) => {
     console.log('result2: ', result2);
 }).catch(e => {
    console.log(e); 
 });
 