/*
    iffe - Immediatly-invoked Function expression
*/

(function printNum(){
    var a = 5;
    console.log(a);
})();

(function count(){
    for(var i = 1; i <=10; i++)
    console.log(i);
})();