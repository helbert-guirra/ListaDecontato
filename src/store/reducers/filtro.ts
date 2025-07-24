import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  valor: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  criterio: 'categoria' | 'busca_nome' | 'todos'
}

const initialState: FiltroState = {
  termo: '',
  valor: 'Todos',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<Partial<FiltroState>>) => {
      if (action.payload.criterio) {
        state.criterio = action.payload.criterio
      }
      if (action.payload.valor) {
        state.valor = action.payload.valor
      }
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
