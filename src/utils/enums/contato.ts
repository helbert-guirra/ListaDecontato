export enum Prioridade {
  URGENTE = 'urgente',
  IMPORTANTE = 'importante',
  NORMAL = 'normal'
}

export enum Status {
  PENDENTE = 'pendente',
  CONCLUIDA = 'concluída'
}

export enum Categoria {
  FAMILIA = 'família',
  CLIENTE = 'cliente',
  FAVORITO = 'favorito',
  BLOQUEADO = 'bloqueado'
}

export const enums = {
  Prioridade,
  Status,
  Categoria
}

export default enums
