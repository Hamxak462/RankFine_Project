import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const RankRefine = ({title , desc , facebookSrc, twiterSrc, instagramSrc}) => {
  return (
    <>
     <Box>
         <Stack spacing={2}>
          <Box>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='p' >{desc}</Typography>
          </Box>
          <Box sx={{color : "#fff"}}>
            <a href="#" style={{color:"#fff"}}><img src={facebookSrc} alt="Facebook" /></a>
            <a href="#"><img src={twiterSrc} alt="Twitter" /></a>
            <a href="#"><img src={instagramSrc} alt="Instagram" /></a>
          </Box>
        </Stack>
     </Box> 
    </>
  )
}

export default RankRefine
