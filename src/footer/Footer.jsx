import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/Home.css'
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";   
function Footer() {
  return (
    <>
    <div className='d-none' style={{ backgroundColor: '#f0f8ff', padding: '20px' }}>
    <Container>
        <div className='row'>

            <div className='col-lg-6'>
                <p className='p-home-2'>Copyright © 2025 xincorp.org All rights reserved.</p>
            </div>
            <div className='col-lg-6'>
            <div className=' d-flex justify-content-end  gap-2'>
                <div className='icon-foo'><GrFacebookOption color='#fff' fontSize={20}/></div>
                <div className='icon-foo'><FaXTwitter color='#fff' fontSize={20} /></div>
                <div className='icon-foo'><ImPinterest color='#fff' fontSize={20}/></div>
                <div className='icon-foo'><FaLinkedinIn color='#fff' fontSize={20}/></div>
            </div>

            </div>


        </div>
    </Container>
    </div>
    </>
  )
}

export default Footer
