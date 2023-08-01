import React from 'react'
import David from '../assets/partner1.jpeg'
import Partnerlist2 from '../assets/partner2.png'
import Partnerlist3 from '../assets/partner3.png'
import Partnerlist4 from '../assets/partner4.png'

function Content1() {
  return (
    <section className='partnerslist'>
        <img className='belo' src={ David } alt=""/>
        <img className='belo' src={ Partnerlist2 } alt=""/>
        <img className='belo' src={ Partnerlist3 } alt=""/>
        <img className='belo' src={ Partnerlist4 } alt=""/>
    </section>
  )
}

export default Content1
