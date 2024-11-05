import { configureStore } from '@reduxjs/toolkit'
import TarefasReducer from '../store/reducers/tarefas'

export const store = configureStore({
  reducer: {
    tarefas: TarefasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
