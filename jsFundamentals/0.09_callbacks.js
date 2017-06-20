var fs = require('fs');

/*

    request = prepare_the_request()
    send_request_asynchronously (request, function (response){
        display(response);
    });

*/

function getBulls(filePath, done){
    //telling file system to read a file that the user of the function passes into 
    // as a argument. Then we are creating a callback to handle that case.
    fs.readFile(filePath, function(err, bulls){
        //error handling
        if (err) return done(err);

        fs.readFile('0.09_bullsdictionary.txt', function(err, dictionary){
            //error handling
            if (err) return done(err);

            //Do some logic here
            compareBulls(bulls, dictionary);
        })
    })
    //variable way
var compareBulls = function(bulls, dict){
    //turn items from these files into elements in an array then split them
    dict = dict.toString().split('\n');
    bulls = bulls.toString().split('\n').filter(function(bulls){
       // iterating over the dictionary, then it's checking if the bulls ar located
       // inside of the dictionary. If it is then it's returning that value.
        return dict.indexOf(bulls) !== -1;
    });
    done(bulls);
};
}


getBulls('0.09_bulls.txt',function(bulls){

    console.log(bulls);
});

console.log("Hey tell me our name?");
var pintNmaeInThreeSeconds = setTimeout(function(){
    consol.log("Bryce");
},3000);
console.log("nice to meet you");