function calculator() {
    this. totalAmount = 10;
   
    this. value = function() {
        console.log(this.totalAmount);
        return this.totalAmount;
    }
}

function computeAmount() {
return new calculator();
}
computeAmount().value();