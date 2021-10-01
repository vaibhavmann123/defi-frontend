import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './image/logo.svg'

const AppLogo = styled.div`
  height: 6rem;
  width: 6rem;
  background-color: #fff;
  background-image: url('${Logo}') !important;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: 3.4rem 3.4rem;
`

const DoodaLogo = () => {
  return <AppLogo />
}

export default DoodaLogo
