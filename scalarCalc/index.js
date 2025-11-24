function add(a, b){
    console.log('Addition of number is ',a+b);
}
function sub(a, b){
    console.log('Subtraction of number is ',a-b);
}
function mul(a, b){
    console.log('Multiplication of number is ',a*b);
}
function div(a, b){
    console.log('Division of number is ',a/b);
}

module.exports={
    Addition: add,
    Subtraction: sub,
    Multiplication: mul,
    Division: div,

}