let persona = {
    nombre: 'Cristian',
    edad: 26
};

let persona2 = {
    nombre: 'Stefhani',
    edad: 27
};

let persona3 = {
    nombre: 'Nathaly',
    edad: 25
};

let personas = [persona, persona2, persona3];

for(let i = 0; i < personas.length; i++){
    let persona = personas[i];
    console.log('Nombre: '+ persona.nombre+ ' -- edad: ' + persona.edad);
}