import Static from "./Estatico"
import Form from "./Form"

const Funcionario = ({values, setNumeroStep, setDatosFuncionarios}) =>{
    return(
        <div className="columns is-multiline">
            <Static values={values}/>
            <Form setNumeroStep = {setNumeroStep} values={values} setValues={setDatosFuncionarios}/>
        </div>
    )
}
export default Funcionario