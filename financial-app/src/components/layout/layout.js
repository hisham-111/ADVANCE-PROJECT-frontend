import React from 'react'
import SideBar from '../sideBar/sideBar.js';
import Header from '../Header/Header'
import './layout.css';
import { Container } from '@mui/material';
import { Stack } from '@mui/system';

export default function Layout({children}) {
  return (
    <div className="layout" style={{display:"flex", justifyContent:"space-between"}}>
      
    <SideBar />
    <Container>
    <Header/>
    {children}
    </Container>
  </div>
  )
}
