import { combineReducers } from '@reduxjs/toolkit'
import comicSlice from './comics/comicSlice'
import charactersSlice from './characters/charactersSlice'

export const rootReducer = combineReducers({
  comicSlice,
  charactersSlice,
})
