function receivesAFunction(callback){
    return callback();

}
receivesAFunction(callback);


function returnsANamedFunction(){
    function name(){
        console.log('')
    };
    return name;
}

function returnsAnAnonymousFunction(callback){
    return function(){};
}