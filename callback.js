function sum(a,b){
    return a+b;
}
function sumWithMsg(clbk,msg){
    const result = clbk(10,20);
    const fresult = `The sum of two numbers is ${result}`;
    console.log(fresult);
}
sumWithMsg(sum,"mr. deepak");