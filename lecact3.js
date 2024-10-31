//#1 greeting
function greeting(name){
    console.log("Hey, " + name);
}

greeting("You!");



//#2 
let diameter = 15;
if ( diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    console.log ("circumference = " + circumference);
}

//#3
function Hello() {
    console.log("Hello?");

}
function Youthere(){
    console.log("You There?");
    Hello();
}
Hello();
Youthere();
//#4
// the 'name' was filled in creating a sentence .
// 

//#5
const 1 =() => {
    return 2 ();

};
const 2 =() => {
    return 1 ();
};
console.log ( 1 ());
