import React from 'react'
import NavBar from '../nav/nav.js'
import Footer from "../footer/footer.js";
import './layout.css';

export default function Layout() {
  return (
    <div className="layout">
    <NavBar />
    {children}
    <Footer />
  </div>
  )
}
