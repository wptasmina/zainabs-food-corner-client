import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <div className="min-h-[calc(100vh-300px)] ">
          <Outlet></Outlet>
        </div>
        <Footer />
    </div>
  )
}
