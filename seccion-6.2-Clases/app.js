class Carro{
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.CreadoEn = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro(){
        if(this.encendido){
            console.error('El carro ya esta encendido')
        }
        else{ 
            this.encendido = true;
            console.log('El Carro esta encendido');
        }

        return this;
    }
    realizarViaje(consumo){

        if (!this.encendido) return console.log('Carro apagado');

        if (consumo > this.gasolina) return console.log('No se puede realizar el viaje: Gasolina ' + this.gasolina);

            this.gasolina = this.gasolina - consumo;

            return 'Le queda: ' + this.gasolina;

    }
}

let carro = new Carro('Mazda', 'Sedan', 4)

console.log(carro);