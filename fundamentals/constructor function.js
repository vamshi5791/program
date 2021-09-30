var constructor=new Function("a","b","document.write('in constructor function:');return a+b;");


document.write('addition of a and b is:'+constructor(4,3))
