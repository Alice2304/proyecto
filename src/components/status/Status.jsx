import {useState, useEffect} from 'react'

import { entes } from 'lib/peticiones/entes';

const Status=({setEnteData})=>{
    const [entesData, setEntesData] = useState([])

    useEffect(() => {
        entes(setEntesData)
    }, [])
    
    return(

        <div className="field has-addons is-justify-content-end">
            <p className="control">
                <span className="select">
                <select name="typeIdentification" onChange={(e)=>(
                    setEnteData(e.target.value)
                )}>
                    
                    <option value="TODOS">TODOS</option>
                    {entesData.map((es, index)=>(
                        <option key={index} value={es.ente}>{es.ente}</option>
                    ))}
                </select>
                </span>
            </p>
        </div>
    )
}
export default Status