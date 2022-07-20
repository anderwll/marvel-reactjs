import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const BoxStyled = styled(Box)(({ theme }) => ({
  height: '600px',
  backgroundImage: 'url(./images/Banner1.jfif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    '& .MuiTypography-root': {
      fontSize: '60px',
    },
  },
}))

export { BoxStyled }
