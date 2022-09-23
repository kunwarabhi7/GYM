import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../componets/HeroBanner'
import SearchExercises from '../componets/SearchExercises'
import Exercises from '../componets/Exercises'

const Home = () => {
  return (
    <Box>
<HeroBanner />
<SearchExercises />
<Exercises />
    </Box>
  )
}

export default Home
