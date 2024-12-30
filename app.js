
//Q1-----------------------
function reNum(num) {
    let newNum=0;
    while(newNum !== 0) {
        x=num % 10;
        newNum*=10 +x;
        num=Math.floor(num/10);
    }
    return newNum;
}

let n = 532443;
console.log(reNum(n));


//Q2-----------------------
for(let i=0; i<=15; i++) {
    if(i%2==0) {
        console.log(i+ "is even");
    }else {
        console.log(i+ "is odd");
    }
}


//Q3-----------------------
function sorting(str) {
    return str.toLowerCase().split('').sort().join('');
}

let str = "Orange";
console.log(sorting(str));


//Q4----------------------
let usernum=prompt("Enter a number: ");
let dashed="";

for(i=0; i<usernum.length; i++) {
    let z=parseInt(usernum[i]);
    let w=parseInt(usernum[i+1]);
    if(z%2==0 && w%2==0) {
        dashed=dashed+usernum[i]+"-";
    }else {
        dashed=dashed+usernum[i];
    }
}

window.alert("the dashed number is: "+ dashed);


//Q5----------------------
function ageChecker(age) {
    age >= 18? window.alert("The user is Adult") : window.alert("The user is Minor");
}

let userage =prompt("Enter your Age : ");
ageChecker(userage);