// Task 1:
function addition(n1, n2) {
    return n1+n2;
}

console.log(addition(3, 2));    
console.log(addition(-3, -6));  
console.log(addition(7, 3)); 


// Task2:
function convert(minutes){
    return minutes*60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


// Task 3:
function add(num) {
    return num+1;
}
console.log(add(0));
console.log(add(9));
console.log(add(-3));


// Task4:
function triArea(base,height) {
    return (1/2)*base*height;
}
console.log(triArea(3,2));
console.log(triArea(7,4));
console.log(triArea(10,10));


// Task5:
function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));


// Task6:
function calcAge(age) {
    return age*365;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));


// Task7:
function circuitPower(voltage,current) {
    return voltage*current;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));


// Task8:
function nextEdge(side1,side2) {
    return (side1+side2)-1;
}
console.log(nextEdge(8,10));
console.log(nextEdge(5,7));
console.log(nextEdge(9,2));

//Task9:
function remainder(x,y){
    return x%y;
}
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log(remainder(5,5));

//Task10:
function giveMeSomething(a){
    return "something " + a;
}
console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


//Task11:
function squared(x){
    return x*x;
}
console.log(squared(5));
console.log(squared(9));
console.log(squared(100));


//Task12:
function lessThanOrEqualToZero(x){
    if (x<=0){
        return true;
    }
    else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


//Task13:
function sumPolygon(n){
    if (n>2){
        return (n-2)*180;
    }
    else {
        return -1;
    }
}
console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));


//Task14:
function nameString(name) {
    var result = name + "Coder";
    return result;
  }
  
  console.log(nameString("Mubashir"));    
  console.log(nameString("Matt"));        
  console.log(nameString("javaScript"));


//Task15:
function lessThan100(num1, num2) {
    if((num1 + num2) < 100){
        return true;
    }
    else {
        return false;
    }
  }

  console.log(lessThan100(22, 15)); 
  console.log(lessThan100(83, 34));  
  console.log(lessThan100(3, 77));   