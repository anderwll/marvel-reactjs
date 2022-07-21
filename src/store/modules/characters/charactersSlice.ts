/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface Characters {
  id: string
  nome: string
  descricao: string
  imgURL: string
}

interface InitialState {
  loading: boolean
  characters: Characters[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  characters: [],
  error: '',
}

const charactersSlice = createSlice({
  name: 'Characters',
  initialState,
  reducers: {
    requestCharacters(state) {
      state.loading = true
    },
    createCharacters(state, action) {
      state.loading = false
      state.characters = action.payload
      state.error = ''
    },
    requestCharactersError(state, action) {
      state.loading = false
      state.characters = []
      state.error = action.payload
    },
    clearCharacters() {
      return initialState
    },
  },
})

export const {
  requestCharacters,
  createCharacters,
  requestCharactersError,
  clearCharacters,
} = charactersSlice.actions

export default charactersSlice.reducer
