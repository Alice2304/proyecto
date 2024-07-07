import { useState, useEffect, Fragment } from "react";
//router-dom
import Panel from "components/panel/Panel"
import { useParams } from "react-router-dom";
import { creates, encuesta } from "lib/peticiones/funcionariosInformacion";
import { Descriptions } from 'antd';
import { Avatar, List, Badge } from 'antd';
import { responsables } from "lib/peticiones/funcionariosResponsableLista";
import TableComp from "components/tabla/Tabla";
import { Link } from "react-router-dom";

const InformacionFuncionario = () =>{
    const estatus =["Si", "No","Sin Definir"]
    const estatusColor =["success", "error","warning"]
    let {cedula} = useParams('cedula')
    let {id} = useParams('cedula')
    const [data, setData] = useState({
        id: 0,
        cedula: "",
        apellidos_nombres: "",
        telefono: "",
        correo: "",
        serial_carnet: "",
        codigo_carnet: "",
        estado: "",
        municipio: "",
        localidad: "",
        nombre_centro_votacion: "",
        id_estatus: 0,
        entidad_principal: "",
        entidad_adscripcion: "",
        departamento: "",
        created: "",
    })
    const [responsablesLista, setResponsablesLista] = useState([])

    const [dataEncuesta, setDataEncuesta] = useState([])

    const items = [
        {
          key: '12',
          label: 'Estatus',
          children: <Badge status={estatusColor[(data.id_estatus-1)]} text={estatus[(data.id_estatus-1)]} />
        },
        {
          key: '1',
          label: 'Nro Identificacion Jefe 1x10',
          children: data.responsable,
        },
        {
          key: '1',
          label: 'Telefono',
          children: data.telefono,
        },
        {
          key: '5',
          label: 'Estado',
          children: data.estado,
        },
        {
          key: '6',
          label: 'Municipio',
          children: data.municipio,
        },
        {
          key: '8',
          label: 'Parroquia',
          children: data.localidad,
        },
        {
          key: '9',
          label: 'Centro de Votación',
          children: data.nombre_centro_votacion,
        },
        {
          key: '10',
          label: 'Ente Principal',
          children: data.entidad_principal,
        },
        {
          key: '11',
          label: 'Ente Adscrito',
          children: data.entidad_adscripcion,
        },
        {
          key: '12',
          label: 'Departamento',
          children: data.departamento,
        }
      ];

      const Columns = [
        {
          width:28,
          render: (text, record) => <Badge status={estatusColor[(record.id_estatus-1)]}/>,
        },
        {
          title:'Entidad',
          dataIndex:'entidad_adscripcion'
        },
        {
          title:'Cedula',
          dataIndex:'cedula',
          width:100,
          render: (text, record) => <Link to={'/funcionarios/'+record.id+'/'+record.cedula}>{text}</Link>,
        },
        {
          title:'Nombre y Apellido',
          dataIndex:'apellidos_nombres',
          ellipsis: true,
          render: (text, record) => <Link to={'/funcionarios/'+record.id+'/'+record.cedula}>{text}</Link>,
        },
        {
          title:'Estatus',
          dataIndex:'estatus',
          responsive: ["md"],
          filters: [
            {
              text: 'Si',
              value: 'SI',
            },
            {
              text: 'No',
              value: 'NO',
            },
            {
              text: 'Por definir',
              value: 'POR DEFINIR',
            },
          ],
          //defaultFilteredValue : ['SI'],
          onFilter: (value, record) => record.estatus.indexOf(value) === 0,
        }
      ];


      


     

    useEffect(() => {
        creates(cedula,setData)
        encuesta(id, setDataEncuesta)
        responsables(cedula, setResponsablesLista)
    }, [cedula])
    
    return(
        <div className="columns is-multiline is-centered is-vcentered">
            <div className="column is-12">
                <Panel title='Centro de Datos' subtitle={`Informacion Funcionario`}/>
            </div>
            {
              dataEncuesta.length>0?
                <div className="column is-12">
                  <div className="box">
                    <p className = "text-anchor has-text-weight-bold">Respuesta Encuesta</p>
                    <List
                        itemLayout="horizontal"
                        dataSource={dataEncuesta}
                        renderItem={(item, index) => (
                          <List.Item>
                            <List.Item.Meta
                              avatar={<Avatar src={`https://api.dicebear.com/8.x/icons/svg?seed=39`} />}
                              title={item.title}
                              description={item.description}
                            />
                          </List.Item>
                        )}
                      />
                  </div>
                </div>
              :null
            }
            
            <div className="column is-12">
              <div className="columns is-multiline">
                <div className="column is-12">
                  <div className="box">
                    <Descriptions title={`${data.apellidos_nombres}  CI:${cedula}`} layout="vertical" items={items} />
                  </div>
                </div>

                
                <div className="column is-12">
                  <div className="box">
                    <p className = "text-anchor has-text-weight-bold">1X10</p>
                    <TableComp columns={Columns} data={responsablesLista} pagination={{ defaultPageSize: 10, pageSizeOptions: ['5', '7', '10', '20', '30'] }}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default InformacionFuncionario