const calculator = {
    add: function (a,b){
        console.log(a+"+"+b+"="+ (a+b));
    },
    minus: function (a,b){
        console. log(a+"-"+b+"="+ (a-b));
    },
    divide: function(a,b){
        console. log(a+"/"+b+"="+ (a/b));
    },
    multi: function(a,b){
        console. log(a+"*"+b+"="+ (a*b));
    },
    power: function(a,b){
        console. log(a+"**"+b+"="+ (a**b));
    }
    };

calculator.add(1,2);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.multi(1,2);
calculator.power(1,2);