export const validarEmpty = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (key!=="agent_number") {
                if (object[key] === "" || object[key] == 0) {
                    return false
                }
            }
                
            }
            
    }
    return true
}