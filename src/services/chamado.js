import { http } from './config'

export default {
  listar: () => {
    return http.get('chamado')
  },
  salvar: (chamado) => {
    return http.post(`chamado`, chamado)
  }
}
