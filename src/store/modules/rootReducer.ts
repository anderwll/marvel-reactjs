import { combineReducers } from '@reduxjs/toolkit'
import comics from './comics/comicSlice'
import characters from './characters/charactersSlice'

export const rootReducer = combineReducers({
  comics,
  characters,
})
