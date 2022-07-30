/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { getAll, selectAll } from '../../store/modules/comics/comicSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks'

const ComicsPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const comicsRedux = useAppSelector(selectAll)
  const comicsLoading = useAppSelector((state) => state.comics.loading)
  // const ref = useRef(null)

  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <Grid container spacing={2} sx={{ marginTop: '5rem' }}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Revistas
        </Typography>
      </Grid>
      {comicsLoading && (
        <Grid item xs={12}>
          Loading...
        </Grid>
      )}

      {comicsRedux && (
        <>
          {comicsRedux.map((dado: any) => (
            <Grid key={dado.id} item sm={6} md={3}>
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
                      {dado.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <FavoriteIcon />
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

export default ComicsPage
