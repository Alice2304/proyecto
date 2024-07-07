import axios from "axios"
import { rutaAxios } from "helpers/variablesGoblales"

export async function update(values, message, step, estatus) {
    try {
      const id = values.id;
      values.id_estatus = estatus;
      delete values.id;
      delete values.updated;
      delete values.responsable;
      delete values.created;
      const response = await axios.put(`${rutaAxios}funcionarios/update/${id}`, { ...values });
      message.success('Se cargó la información correctamente', 2);
      return response;
    } catch (error) {
      message.error('Ups... Ha ocurrido un error, intente más tarde', 2);
      return false;
    }
  }