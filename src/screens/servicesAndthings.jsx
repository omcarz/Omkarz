import React from 'react'
import OurServices from '../components/ourServices'
import Things from '../components/thingsShouldKnow'
import '../styles/servicesAndThings.css'
export default function servicesAndthings() {
  return (
    <div className='servicesAndThings'>
      <Things />
      <OurServices />
    </div>
  )
}
