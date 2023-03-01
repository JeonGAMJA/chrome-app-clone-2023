const player = {
    name: "Gamja",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("Lynn");
player.sayHello("Gamja");