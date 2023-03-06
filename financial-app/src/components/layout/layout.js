import React from 'react'
import NavBar from '../nav/nav.js'
import './layout.css';

export default function Layout() {
  return (
    <div className="layout">
    <NavBar />
    {children}
  </div>
  )
}
