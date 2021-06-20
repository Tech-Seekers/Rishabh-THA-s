//this method
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

let bob = function(num, str, x){
    console.log('bob', num, str, this, x);
    return true;
}
let bill = {
    name: 'Bill Murray',
    movie: 'Lost in Translation',
    myMethod: function(fn){
        //fn(2, 'hello');
        let n = arguments[1];
        let s = arguments[2];
        fn.apply(bill, [n, s]);
        //fn.call(bill, n, s);
    }
}

let fred = bob.bind(bill, 5, 'hasta la vista');
fred('x');

//bob(1, 'hello');
//bill.myMethod(bob);
//bob.call(bill, 2, 'goodbye');
//let arr = [3, 'hi'];
//bob.apply(bill, arr);
//bill.myMethod(bob, 4, 'ciao');
