function describirPersona(p){
	console.log(`${p.nombre} tiene la edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
	nombre: "Cristian",
	edad: 27,
	estatura: 1.70
};

describirPersona(persona);