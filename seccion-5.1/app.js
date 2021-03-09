function imprimirTabla(base, limite){
    for (let i= 1; i<=limite; i++){
        console.log(base +' x '+ i + ' = ' +(base*i) );
    }
    console.log('===========');

}

imprimirTabla(5,10);
imprimirTabla(7,10);
