/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { marvel } from '../../../services'
import { RootState } from '../../index'

export interface Comics {
  id: number
  name?: string
  imgURL?: string
  favorite?: any
}

const adapter = createEntityAdapter<Comics>({
  selectId: (item) => item.id,
})

export const { selectAll, selectById } = adapter.getSelectors<RootState>(
  (state) => state.comics
)

export const getAll = createAsyncThunk('getAllComics', async () => {
  const response = await marvel.get('/comics')
  return response.data.results
})

const comicSlice = createSlice({
  name: 'comics',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    upsertOne: adapter.upsertOne,
    setAll: adapter.setAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false
        adapter.setAll(state, action.payload)
      })
      .addCase(getAll.rejected, () => {
        console.log('deu ruim')
      })
  },
})

export const { addOne, addMany, updateOne, setAll, upsertOne } =
  comicSlice.actions
export default comicSlice.reducer
