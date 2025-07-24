import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Pastor João',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(71)9999-7894',
      email: 'pastor@email.com.br',
      aniversario: '24/07',
      id: 1
    },
    {
      nome: 'Joaquina Oliveira',
      categoria: enums.Categoria.FAMILIA,
      telefone: '(13)9999-7894',
      email: 'joaquina@email.com.br',
      aniversario: '14/11',
      id: 2
    },
    {
      nome: 'Eletricista Edivaldo',
      categoria: enums.Categoria.TRABALHO,
      telefone: '(13)9999-7894',
      email: 'edivaldo@email.com.br',
      aniversario: '10/02',
      id: 3
    },
    {
      nome: 'Maria Clara',
      categoria: enums.Categoria.FAMILIA,
      telefone: '(11)98888-1234',
      email: 'maria.clara@email.com.br',
      aniversario: '05/05',
      id: 4
    },
    {
      nome: 'Carlos Silva',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(21)97777-5678',
      email: 'carlos.silva@email.com.br',
      aniversario: '15/08',
      id: 5
    },
    {
      nome: 'Ana Beatriz',
      categoria: enums.Categoria.TRABALHO,
      telefone: '(31)96666-4321',
      email: 'ana.beatriz@email.com.br',
      aniversario: '22/03',
      id: 6
    },
    {
      nome: 'Roberto Santos',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(41)95555-8765',
      email: 'roberto.santos@email.com.br',
      aniversario: '30/12',
      id: 7
    },
    {
      nome: 'Fernanda Lima',
      categoria: enums.Categoria.FAMILIA,
      telefone: '(51)94444-3456',
      email: 'fernanda.lima@email.com.br',
      aniversario: '18/09',
      id: 8
    },
    {
      nome: 'Engenheiro Paulo',
      categoria: enums.Categoria.TRABALHO,
      telefone: '(61)93333-2345',
      email: 'paulo.engenheiro@email.com.br',
      aniversario: '12/01',
      id: 9
    },
    {
      nome: 'Tatiane Costa',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(71)92222-6789',
      email: 'tatiane.costa@email.com.br',
      aniversario: '29/04',
      id: 10
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload
      )
      if (index >= 0) {
        if (window.confirm('Tem certeza que deseja remover este contato?')) {
          state.itens.splice(index, 1)
        }
      }
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number
        telefone: string
        email: string
        aniversario: string
      }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = {
          ...state.itens[indexDoContato],
          telefone: action.payload.telefone,
          email: action.payload.email,
          aniversario: action.payload.aniversario
        }
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        // Aqui você pode implementar uma notificação mais amigável
        alert(
          'Já existe um contato cadastrado com este nome, insira sobrenome!'
        )
      } else {
        const ultimoId =
          state.itens.length > 0 ? Math.max(...state.itens.map((c) => c.id)) : 0
        const novoId = ultimoId + 1

        const novoContato = {
          ...action.payload,
          id: novoId
        }
        state.itens.push(novoContato as Contato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
