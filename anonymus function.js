var anon=function (a,b){
      document.write("annonymous function:");
      return a+b;
}
anon(4,8);
setTimeout(function(){document.write("anonymous function call in settimeout")},3000);