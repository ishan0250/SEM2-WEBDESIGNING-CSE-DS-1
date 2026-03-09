let marks =45;
if (marks>90){
    console.log("grade A");
}
else if (marks<=90&&marks>=75){
    console.log("grade B");
}
else if (marks<75 && marks>=50){
    console.log("grade C");
}
else{
    console.log("grade D");
}

let operator =1;
let a=3;
let b=5;
switch(operator){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a*b);
        break;
    case 3:
        console.log(a-b);
        break;
    case 4:
        copnsole.logh(a/b);
        break;
    default:
        console.log("invalid operation");
}