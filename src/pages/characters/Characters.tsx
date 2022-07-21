import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { marvel } from '../../services'

import {
  requestCharactersError,
  requestCharacters,
  createCharacters,
  clearCharacters,
} from '../../store/modules/characters/charactersSlice'

const CharactersPage: React.FC = () => {
  const dispatch = useDispatch()

  const characterRedux = useSelector((state: any) => state.charactersSlice)

  useEffect(() => {
    dispatch(requestCharacters())
    marvel
      .get('/characters')
      .then(({ resposta }) => {
        const res = JSON.parse(resposta)
        console.log(res.data.data)
      })
      .catch()
  }, [])

  return (
    <>
      <h1>Growdev</h1>
      <p>OPA</p>
    </>
  )
}

export default CharactersPage
