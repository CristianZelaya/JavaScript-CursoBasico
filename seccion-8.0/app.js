function filtrarLetra(arr, letra){
    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++){

        let nombre = arr[i];

        if(nombre[0] === letra){
            nuevoArr.push(nombre);
        }
    }

    return nuevoArr;
}

let nombres = ['Cris', 'Stefhani', 'Nathaly'];
let nombreCon = filtrarLetra(nombres, 'C');
console.log(nombreCon);