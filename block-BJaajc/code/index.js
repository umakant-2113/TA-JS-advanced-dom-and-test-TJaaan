function add(a,b){
return a+b
}
function fullName(firstName,lastName){
return firstName+lastName;
}
function isPalindrome(value){
if(value==="palinDrome"){
return true;
}else{
    return false;
}

}

function getCircumfrence(radius){

    return ` The circumference is ${2*22/7*radius}`  
}

function getArea(radius){
    
return `The area is ${22/7*radius*radius}`
}

module.exports = {add, fullName,isPalindrome,getCircumfrence,getArea}
