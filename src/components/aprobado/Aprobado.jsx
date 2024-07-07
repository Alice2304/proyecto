import React from "react";

import { Result } from 'antd';

const Aprobado = ({values}) => {
    return(
        <div className="box">
            <Result
                status="success"
                title="Gracias por realizar la encuesta"
                subTitle={"Su informacion se registrado correctamente"+" "+values.apellidos_nombres+" "+ "con el numero de identidad"+" "+values.cedula}
                extra={[
                ]}
            />
        </div>
        
    )
}

export default Aprobado