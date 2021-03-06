import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ahorcado';

  palabra = 'CRIS';
  palabraOculta = "";

  intentos = 0;

  gano = false;
  perdio = false;


  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor(){
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra){

    this.existeLetra(letra); 

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificarGane();
  }

  verificarGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra){
      this.gano = true;
      console.log('EL usuario a GANADO')
    }

    if(this.intentos >= 9){
      this.perdio = true;
      console.log('el usuario perdio');
    }
  }

  existeLetra(letra){
    if (this.palabra.indexOf(letra) >=0){
      //console.log('Existe letra: '+ letra);
    }
    else{
      //console.log('No existe la letra: '+ letra);
      this.intentos ++;
    }
  }
}
