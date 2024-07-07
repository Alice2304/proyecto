import { useState, useEffect, Fragment } from "react";
import Panel from "components/panel/Panel";

import Basic from "components/graficos/Basic";
import BarGraf from "components/graficos/Proyectos";
import Donut from "components/graficos/Donut";

import { estatus, estados } from "lib/peticiones/graficos";

 const Dashboard = ()=> {
  const [estadoss, setEstados] = useState([

  ])
  const [estatuss, setEstatus] = useState([
    {"total":0},
    {"total":0},
    {"total":0}
  ])

  const [enteData, setEnteData] = useState("TODOS")

  useEffect(() => {
    sync(enteData)
  }, [enteData])

  const sync = async (val)=>{
    const estadosGraficos = await estados(val)
    const estatusGraficos = await estatus(val)
    setEstados(estadosGraficos)
    setEstatus(estatusGraficos)
  }
  
  return (
    <div className="columns is-multiline is-centered is-vcentered">
      <div className="column is-12">
        <div className="columns is-multiline">
          {
            estadoss.length>0?
            
            <Fragment>
              <div className="column is-12">
                <Panel title='Centro de Datos' subtitle={`Dashboard`} setEnteData={setEnteData} options={true}/>
              </div>
              
              <div className="column is-3">
                <Basic
                    title = "Funcionarios registrados"
                    icon = "blue"
                    reportes ={estatuss[0].total+estatuss[1].total+estatuss[2].total}
                    nomenclatura="Tareas"
                    classname={'height-grafico is-justify-content-center is-align-items-center is-flex'}
                    height={"height"}
                />
              </div>
              <div className="column is-3">
                <Basic
                    title = "Votaron"
                    icon = "green"
                    reportes ={estatuss[0].total}
                    nomenclatura="Tareas"
                />
              </div>
              <div className="column is-3">
                <Basic
                    title = "No votaron"
                    icon = "red"
                    reportes ={estatuss[1].total}
                    llave="porcentaje_abastecimiento"
                    nomenclatura="Tareas"
                />
              </div>
              <div className="column is-3">
                <Basic
                    title = "Sin Información"
                    icon = "yellow"
                    reportes ={estatuss[2].total}
                    llave="porcentaje_abastecimiento"
                    nomenclatura="Tareas"
                />
              </div>

              <div className="column is-8">
                <div className="box height-is-total is-primary">
                  <p className = "text-anchor has-text-weight-bold has-text-white	">Cantidad de funcionario estado</p>
                  <p className="has-text-white"></p>
                  <BarGraf ancho="100%"
                    fill="rgb(255, 208, 0)"
                    fill_2="rgb(172, 193, 51)"
                    fill_3="rgb(215, 40, 48)"
                    background="rgba(98,252,198,0.2)"
                    graficosReducer={estadoss}
                  />
                </div>
              </div>

              <div className="column is-4">
                <div className="box">
                  <Donut
                      height={300}
                      data={[estatuss[1].total, estatuss[0].total, estatuss[2].total]}
                      total={estatuss[0].total+estatuss[1].total+estatuss[2].total}
                  />
                </div>
              </div>
            </Fragment>

            :null
          }
          
         
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard