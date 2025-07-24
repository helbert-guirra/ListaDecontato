import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import enums from '../../utils/enums/contato'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1, // ID
      'João da Silva', // Título
      enums.Prioridade.URGENTE, // Prioridade
      enums.Status.PENDENTE, // Status
      'Cliente antigo da área elétrica. Retorno pendente.', // Descrição
      [enums.Categoria.CLIENTE], // Tags
      enums.Categoria.CLIENTE, //
      'João da Silva', // Nome
      'joao.silva@email.com', // Email
      '(71) 99999-0001' // Telefone
    ),
    new Tarefa(
      2, // ID
      'Maria Oliveira', // Título
      enums.Prioridade.IMPORTANTE, // Prioridade
      enums.Status.PENDENTE, // Status
      'Prima que pediu ajuda para instalar ventilador de teto.', // Descrição
      [enums.Categoria.FAMILIA], // Tags
      enums.Categoria.FAMILIA, // Tipo (exemplo)
      'Maria Oliveira', // Nome
      'maria.oliveira@email.com', // Email
      '(71) 98888-1234' // Telefone
    ),
    new Tarefa(
      3, // ID
      'Ivonete Guirra', // Título
      enums.Prioridade.NORMAL, // Prioridade
      enums.Status.PENDENTE, // Status
      'Minha mãe está pedindo para comprar jogo de panelas.', // Descrição
      [enums.Categoria.FAMILIA], // Tags
      enums.Categoria.FAMILIA, // Tipo (exemplo)
      'Ivonete Guirra', // Nome
      'ivonete@email.com', // Email
      '(71) 98888-1234' // Telefone
    ),
    new Tarefa(
      4, // ID
      'Mariana Oliveira', // Título
      enums.Prioridade.NORMAL, // Prioridade
      enums.Status.CONCLUIDA, // Status
      'Pediu para ajudar no TCC da faculdade.', // Descrição
      [enums.Categoria.FAMILIA], // Tags
      enums.Categoria.FAMILIA, // Tipo (exemplo)
      'Mariana Oliveira', // Nome
      'mariana.oliveira@email.com', // Email
      '(71) 98888-1234' // Telefone
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
