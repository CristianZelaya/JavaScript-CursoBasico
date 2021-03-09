function describirPersona(p){
    console.log(`${p.nombre} tiene una edad de ${p.edad} años y mide ${p.estatura}`);
}

let persona = {
    nombre: 'Cristian',
    apellido: 'Zelaya',
    edad: 26,
    estatura: 1.70
}
console.log(persona);

describirPersona(persona);