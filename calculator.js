class Operacion {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    suma = function() {
        return this.a + this.b;
    };
    resta = function() {
        return this.a - this.b;
    };
    mult = function() {
        return this.a * this.b;
    };
    div = function() {
        return this.a / this.b;
    };

    
}

module.exports = Operacion;




