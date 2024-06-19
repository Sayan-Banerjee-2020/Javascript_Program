var obj ={
    keyOne : function(){
        return "Welcome, " + this.name;
    },
    name : "Sayan"
};

var obj2 = {
    keyOne : obj.keyOne,
    name : "Sani"
}

console.log(obj2.keyOne()) // Welcome, Sani
console.log(obj2.keyOne.call(obj)); // Welcome, Sayan