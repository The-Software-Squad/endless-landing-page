import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import Link from 'next/link'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton> */}
      <a href={"https://wa.me/+919347950166"}> <StyledButton disableHoverEffect={true}>Contact Us</StyledButton></a>
    </Box>
  )
}

export default AuthNavigation
