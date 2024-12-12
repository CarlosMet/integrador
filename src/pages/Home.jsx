import React from 'react'


import Hero from '../components/Hero'
import { FloatingNav } from '../components/ui/FloatingNav'
import GridCards from '../components/GridCards'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className='bg-black-100'>
      <FloatingNav navItems={[{name: "about", link: "agregar", icon: ""}]} />      
      <Hero />
      <GridCards />
      <Footer />
    </div>
  )
}
