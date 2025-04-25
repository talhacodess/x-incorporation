import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import NET from 'vanta/src/vanta.net'
import '../../styles/Home.css'
import ring from '../../assets/ring.png'
import circleMain from '../../assets/main.png'
import infoGraphy from '../../assets/info.png'
import career from '../../assets/career.jpeg'
import clothing from '../../assets/clothing.png'
import jackets from '../../assets/jackets.png'
import packaging from '../../assets/packaging.png'
import ceo from '../../assets/ceo.jpg'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {HiOutlinePhone} from 'react-icons/hi'
import {HiOutlinePaperAirplane} from 'react-icons/hi'

function Home() {
    useEffect(() => {
        NET({
            el: '#vanta',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: '#ef334c',
            backgroundColor: '#000435',
            showDots: false
        })
    }, [])
    return (
        <>
            <Container fluid  className=' p-0'>
                <div className='bg' id='vanta'>
                    <Container> <div className='main-home'>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-6'>
                                <div className='d-flex gap-md-3 gap-sm-0 flex-column justify-content-start align-items-start gap-3' >
                                    <h1 className='home-h1'>Explore Our Brands</h1>
                                    <h2 className='home-h2'>DRIVING INDUSTRY EVOLUTION—ONE BRAND AT A TIME</h2>
                                    <p className='p-home'>From cutting-edge tech to world-class support, explore how our family of brands is shaping the future.</p>
                                    <button className='btn-home'>
                                        Discover More <span className='arrow'>➜</span>
                                    </button>

                                </div>
                            </div>
                            <div className='col-lg-6'>
                              <div  className='main-ring'>
                              <div className='main-circle'>
                                    <img  className='w-100' src={circleMain} alt="" />
                                    </div>
                                  <div className='ring'>
                                  <img className='w-100' src={ring} alt="" />
                                  </div>
                                  <div className='float-icon-1 d-none d-sm-block'>
                                  <img  src={clothing} alt="" />
                                  </div>
                                  <div className='float-icon-2 d-none d-sm-block'>
                                  <img  src={packaging} alt="" />
                                  </div>
                                  <div className='float-icon-3 d-none d-sm-block'>
                                  <img  src={jackets} alt="" />
                                  </div>
                              
                              </div>

                            </div>
                        </div>

                    </div>
                    </Container>
                </div>
            </Container>
            <div className=' overflow-hidden' style={{ backgroundColor: '#f0f8ff', }}>
                <Container>
                    <div className='Home-sec2'>
                        <div className='text-center'>
                            <h1 className='home-h1 mb-5' style={{ color: '#000', fontSize: '40px', textTransform: 'uppercase' }}>Our Story <span style={{ color: '#ee334b' }}>X-Incorporation</span></h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <div className='d-flex gap-2 flex-column justify-content-start align-items-start' >

                                    <div className='p-scroll'>
                                        <p className='p-home'>X Incorporation began its journey in 1997 as a software development firm under the name Intellisoft Inc.. With a focus on technology and innovation, we quickly gained momentum and in 1999, we expanded into the U.S. market — rebranding as X Incorporation and marking the beginning of our global presence.

                                            Our early expansion into North America allowed us to tap into evolving market trends in the U.S. and Canada. That strategic leap restarted our journey with a renewed vision.

                                            Soon after, X Incorporation ventured into the travel industry, where we experienced remarkable success. With a team of talented professionals, we expanded our capabilities into web development, digital marketing, and IT services. As the business matured, we built strong corporate alliances and broadened our portfolio to include recruitment and financial services.

                                            To strengthen relationships and streamline our service delivery, we expanded into multiple service areas, shaping X Incorporation into a multi-unit brand recognized for its versatility and performance.

                                            In 2003, we launched our Call Center division, which today provides a wide array of customer support and call handling services across industries — including IT, finance, logistics, shipping management, and relocation services — to clients around the world.

                                            Today, X Incorporation continues to grow across technological innovation, consulting, and outsourcing solutions, supported by robust infrastructure and an unwavering commitment to excellence. We work closely with our clients in a collaborative, professional environment — not only solving their challenges, but helping them uncover and overcome the obstacles limiting their growth.</p>

                                    </div>


                                </div>



                            </div>
                            <div className='col-lg-6'>
                                <img src={infoGraphy} className='w-100' alt="" />

                            </div>

                        </div>
                    </div>
                </Container>
            </div>

            <Container className=' overflow-hidden'>
                <div>
                    <h1 className='home-h1 mt-5 text-center' style={{ color: '#000', fontSize: '40px', textTransform: 'uppercase' }}>Employment <span style={{ color: '#ee334b' }}>Opportunities</span></h1>
                </div>
                <div className='row mt-3  justify-content-between align-items-center g-2'>

                    <div className='col-lg-6'>
                        <img src={career} alt=""  height={650} className='w-100 rounded object-fit-cover shadow' />

                    </div>
                    <div className='col-lg-6'>

                        <div className='d-flex gap-2 flex-column justify-content-start align-items-start mt-5' >


                            <p className='p-home-2'>
                                <strong>X Incorporation</strong> is revolutionizing in the fields of Customer Services, International Sales, Business Development,
                                Call Center Service Solutions, Digital Marketing, and Software Development. We are always on the lookout for talent and for that purpose,
                                we have the following positions available.
                            </p>
                            <p className='p-home-2'>
                                Become a star in our flag and approach us for the following positions:
                            </p>
                            <ol className='p-home-2'>
                                <li>Web Developer (WordPress, Laravel &amp; Front End)</li>
                                <li>Android Developers</li>
                                <li>Digital Marketing Executives</li>
                                <li>Content Writer (Fresh and Experienced)</li>
                                <li>Graphics Designers</li>
                                <li>SEO Link Builders</li>
                                <li>Google AdWords/PPC Officers</li>
                                <li>Call Center Agent</li>
                                <li>International Sales Consultant (US, Australian &amp; UK Shift)</li>
                                <li>Travel Consultants (UK Shift)</li>
                                <li>Data Entry Operators</li>
                                <li>Human Resources</li>
                            </ol>




                        </div>



                    </div>

                </div>

            </Container>

            <div className=' overflow-hidden' style={{ backgroundColor: '#f0f8ff' }}>
                <Container>
                    <div>
                        <h1 className='home-h1 pt-5 text-center' style={{ color: '#000', fontSize: '40px', textTransform: 'uppercase' }}>CEO  <span style={{ color: '#ee334b' }}>Message</span></h1>
                    </div>
                    <div className='row mt-1 justify-content-between align-items-center g-5'>

                        <div className='col-lg-6'>

                            <div className='d-flex gap-2 flex-column justify-content-start align-items-start mt-5' >

                                <div className='p-scroll'>
                                    <p className='p-home-2'>Welcome to The X Inc.
                                        I’m truly delighted that you’ve taken the time to learn more about us.

                                        Being in the service industry, I take great pride in everything The X Inc. has achieved since our beginnings in 1997. Over the years, we've evolved and adapted, yet we’ve never strayed from our roots—our culture, our heritage, and the values that shaped us.

                                        From day one, we have built lasting relationships within the corporate world—connections that we’ve carefully nurtured over time. Especially through our “Call Center Subunit,” we’ve had the opportunity to serve businesses from a wide range of industries across multiple countries. These partnerships are what drive our continuous growth and diverse service offerings.

                                        But beyond our clients, what truly matters most to us is our people. At The X Inc., we firmly believe in equal employment opportunities and the protection, growth, and recognition of our greatest asset—our team. While we welcome innovation and embrace technological change, our success has always been rooted in the talent, passion, and dedication of our people. We make it a priority to keep our employees motivated, fulfilled, and empowered—and in return, they help us deliver excellence in every service we offer.

                                        I believe that "values build trust and loyalty." When you create meaningful opportunities for your employees, you don’t just build a workforce—you build a legacy.

                                        The X Inc. is more than a company—it’s a community. We are a group of passionate individuals committed not only to excellence in business, but also to making a positive impact in the world around us.

                                        Thank you for being a part of our journey.

                                        Junaid Badil
                                        Chief Executive Officer
                                        The X Inc.</p>

                                </div>

                            </div>



                        </div>

                        <div className='col-lg-6'>
                            <img src={ceo} alt="" height={600} className='w-100 rounded shadow object-fit-cover' />

                        </div>


                    </div>

                </Container>
            </div>


            <Container className=' overflow-hidden'>
                <div className='d-flex flex-column align-items-center pt-5 my-5 gap-3 '>
                    <button className='btn-home-2'>
                        Contact US <span className='arrow'>➜</span>
                    </button>
                    <h1 className='home-h1' style={{ color: '#000', fontSize: '40px', textTransform: 'uppercase' }}>Stay Update With Us</h1>

                    <div className='row g-5'>
                        <div className='col-lg-4'>
                            <div className='icon-contact-content  d-flex'>
                                <p className='icon-contact'>
                                    <HiOutlineMailOpen size={25}/>
                                </p>
                                <p className='p-home-2'>example@gmail.Com</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='icon-contact-content  d-flex'>
                                <p className='icon-contact'>
                                    <HiOutlinePhone size={25}/>
                                </p>
                                <p className='p-home-2'>+ 00 234 (9606)170</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='icon-contact-content  d-flex'>
                                <p className='icon-contact'>
                                    <HiOutlinePaperAirplane size={25}/>
                                </p>
                                <p className='p-home-2'>Join Us on Telegram</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='form-contact'>
              <form action=""  >
                <div className='row'>
                  <div className='col'>
                    <input type="text"  className='form-field w-100' placeholder='Name' />
                  </div>
                  <div className='col'>
                  <input type="email" className='form-field w-100' placeholder='Email' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <input type="phone"  className='form-field w-100' placeholder='Phone' />
                  </div>
                  <div className='col'>
                  <input type="text" className='form-field w-100' placeholder='Website' />
                  </div>
                </div>
                <div>
               <textarea name="message" id="message" placeholder='Message' rows={4} className='form-field w-100'></textarea>
                <button type="submit">Submit Message</button>

                </div>
              </form>
            </div>

            </Container>
        </>

    )
}

export default Home
