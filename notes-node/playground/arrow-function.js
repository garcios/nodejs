
var square = x =>  x * x;
console.log(square(9));

var user = {
    name : 'Andrew',
    sayHi: ()  => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sahHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi() ;
user.sahHiAlt(1,2,3);
