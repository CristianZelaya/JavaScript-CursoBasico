function masLargo(arr){
    let nombreLargo ='';
    for(let i = 0; i < arr.length; i++){
        let nombre = arr[i];
        if (nombre.length > nombreLargo.length){
            nombreLargo = nombre;
        }  
    }

    return nombreLargo;
}

let nombres = ['Cris', 'Stefhani', 'Nathaly'];
let nombreLargo = masLargo(nombres);
console.log(nombreLargo);