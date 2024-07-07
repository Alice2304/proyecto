export function colorLoop(index, valor2){
    index = index+1
    let multiplo = []
    for (let indexmultiplo = 1; indexmultiplo < Math.ceil(valor2.length/3)+1; indexmultiplo++) {
        multiplo.push(3*indexmultiplo)
    }

    
    for (let indexposicion = 0; indexposicion < Math.ceil(valor2.length/3)+1; indexposicion++) {
        if (index === multiplo[indexposicion]) {
            index = 3
        } else if (index + 1 === multiplo[indexposicion]) {
            index = 2
        } else if (index + 2 === multiplo[indexposicion]){
            index = 1
        }
    }   

    return index
 }

 export const ColorColumns = (status) =>{
    
    let background = 0
    if (status === 1) {
        background = 'hsl(212, 100%, 36%)'
    }
    if (status === 2) {
        background = 'hsl(49, 100%, 50%)'
    }
    if (status === 3) {
        background = 'hsl(357, 69%, 50%)'
    }
    if (status === 4) {
        background = 'hsl(357, 69%, 50%)'
    }
    if (status === 5) {
        background = 'hsl(357, 69%, 50%)'
    }
    if (status === 6) {
        background = 'hsl(193, 64%, 37%)'
    }
    if (status === 7) {
        background = 'hsl(130, 52%, 40%)'
    }
    return background
}