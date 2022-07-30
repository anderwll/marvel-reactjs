/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import React, { useEffect, useRef } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
  getAll,
  selectAll,
  upsertOne,
} from '../../store/modules/characters/charactersSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks'

const CharactersPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const characterRedux = useAppSelector(selectAll)
  const charactersLoading = useAppSelector((state) => state.characters.loading)
  const ref = useRef(null)

  useEffect(() => {
    dispatch(getAll())
  }, [])

  const handleFavorite = (id: number, favorite: boolean) => {
    dispatch(upsertOne({ id, favorite: !favorite }))
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: '5rem' }}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Personagens
        </Typography>
      </Grid>
      {charactersLoading && (
        <Grid item xs={12}>
          Loading...
        </Grid>
      )}
      {characterRedux && (
        <>
          {characterRedux.map((dado: any) => (
            <Grid key={dado.id} item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`${dado.thumbnail.path}.jpg`}
                    alt="imgPath"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {dado.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {dado.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    ref={ref}
                    size="small"
                    color="primary"
                    onClick={() => {
                      handleFavorite(dado.id, dado.favorite)
                    }}
                  >
                    {dado.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  )
}

export default CharactersPage
