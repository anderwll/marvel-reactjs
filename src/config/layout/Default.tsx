/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import CharactersPage from '../../pages/characters/Characters'
import ComicsPage from '../../pages/comics/Comics'
import HomePage from '../../pages/home/Home'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

interface LayoutDefaultPros {
  component: React.FC
}

const [value, setValue] = React.useState(0)

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue)
}

const LayoutDefault: React.FC<LayoutDefaultPros> = ({
  component: Component,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Personagens" {...a11yProps(1)} />
        <Tab label="Revistas" {...a11yProps(2)} />
      </Tabs>
      {value === 0 && setValue(Component)}
      {value === 1 && <CharactersPage />}
      {value === 2 && <ComicsPage />}
    </Box>
  )
}

export default LayoutDefault
