import * as enums from '../utils/enums/contato'

class Tarefa {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  tipo: enums.Categoria
  descricao: string
  tags: enums.Categoria[]
  email?: string
  telefone?: string
  nome: string

  constructor(
    id: number,
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    tags: enums.Categoria[],
    tipo: enums.Categoria,
    nome: string,
    email?: string,
    telefone?: string
  ) {
    this.id = id
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.tags = tags
    this.tipo = tipo
    this.nome = nome
    this.email = email
    this.telefone = telefone
  }
}

export default Tarefa
