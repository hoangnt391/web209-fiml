import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
    <header>
        <Header />
    </header>
    <Outlet />
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default HomePage