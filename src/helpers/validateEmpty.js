export const validarEmpty = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (key!=="updated" && key!=="created" && key!== "telefono" && key!=="serial_carnet" && key!== "codigo_carnet" && key!=="responsable") {
                if (object[key] === "" || object[key] == 0) {
                    return false
                }
            } 
            }
            
    }
    return true
}