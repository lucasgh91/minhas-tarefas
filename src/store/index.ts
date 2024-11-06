import { configureStore } from '@reduxjs/toolkit'
import TarefasReducer from '../store/reducers/tarefas'
import FiltroReducer from '../store/reducers/filtro'

export const store = configureStore({
  reducer: {
    tarefas: TarefasReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
