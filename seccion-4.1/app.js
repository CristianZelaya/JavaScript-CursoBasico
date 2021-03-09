let nota = 4;

if (nota >= 9) {
    console.log('Tienes una excelente nota: ' + nota)
} else if (nota >= 6){
    console.log('Aprobo la materia: ' + nota)
} else {
    if(nota <5){
        console.log('Por favor estudie más: ' + nota)
    }
    else{
        console.log('No aprobo la materia: ' + nota)
    }
}