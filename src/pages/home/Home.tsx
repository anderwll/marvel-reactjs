import React from 'react'
import { Grid, Typography } from '@mui/material'

const HomePage: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundImage: 'url(./images/home.jfif)',
        height: 900,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid item xs={12} />
    </Grid>
  )
}

export default HomePage
