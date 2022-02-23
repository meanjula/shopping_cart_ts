import { IconButton } from '@mui/material'
import styled from 'styled-components'
import { Box } from '@mui/material'

export const Header =styled.h1`
text-align:center;
`
export const Wrapper =styled(Box)`
margin-top:40px;

`
export const CartButton =styled(IconButton)`
position:fixed;
top:30px;
right:40px;
z-index:100;
border:1px solid black;
`