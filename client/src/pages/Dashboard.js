import React, { useState } from "react"
import "./Home.css";
function Home() {

    const [show, setShow] = useState(false);
    return (
        <>
            {/*<div className="top-nav">
           <div className="top-nav2">
             <div className="top-navbar">
               <div className="user-icon" style={{position:'relative',marginLeft:'0.75rem'}}>
               <div>
               <button className="user-button">
               <svg xmlns="http://www.w3.org/2000/svg" className="svg-file"viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user h-6 w-6">
                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
               <circle cx="12" cy="7" r="4"></circle></svg>
               </button>
               </div>
               </div>
             </div>
             </div>
  </div> */}
            <div>
                <div className="top-heading">
                    <h1> Hi, Antrixsh 👋</h1>
                </div>

                <div className="div-1" >
                    <div className="div-2" >
                        <div className="div-3">
                            <div className="div-4">

                                <h2 className="heading-1">How to grow your academy with online courses?</h2>
                                <ul>
                                    <li>
                                        <span>
                                            <svg className="svg-file" xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path troke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                        <span> Learn the secrets of growing your academy online with online
                                            courses, live classes, and more.</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="svg-file" xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path troke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                        <span>How to sell online courses?</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="svg-file" xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path troke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                        <span>How to create your own website?</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="svg-file" xmlns="http://www.w3.org/2000/svg " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path troke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>
                                        <span> How to create your own mobile apps: Android &amp; iOS?</span>
                                    </li>
                                </ul>
                                <a href="/admin/webinar?btn_src=home_banner" target="_blank">
                                    <button className="register"> Register for demo </button>
                                </a>

                            </div>
                            {/* <div className="image">
                   <img  className="image"src="https://source.unsplash.com/WHWYBmtn3_0/1600x900" />
</div> */}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="left-div" style={{ width: '61%', marginTop: '1.5rem', padding: '25px' }}>
                            <div style={{ width: '100%' }}>
                                <label style={{ color: "rgba(0,0,0)", fontSize: "1.125rem", fontWeight: "700", }}>
                                    Next</label>
                            </div>
                            <div className="second-main-div">
                                <a className="link-publish" style={{ height: '80px' }} href="/admin/content/courses/14289-sample-class/manager">
                                    <span className="download">
                                        <svg className="download-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" ></path>
                                        </svg>
                                    </span>
                                    <div>
                                        <h3>Publish Sample Class</h3>
                                        <p style={{ color: "rgba(107,114,128)", fontSize: ".875 rem", }}>
                                            Continue adding content and publish
                                        </p>
                                    </div>
                                </a>
                            </div>


                            <div className="hidden-div">
                                <div className="more-div" style={{ marginTop: '15px' }}>
                                    <span style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>{show === true ? 'Less' : 'More'}</span>
                                </div>
                                {show &&
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ flexDirection: 'row', display: 'flex' }}>
                                            <div style={{ width: '50%', paddingRight: '1.5rem', paddingTop: '1rem' }}>
                                                <a className="pop-up" href="/admin/settings/website/payment_manager/payments">
                                                    <span className="span-tag"><svg xmlns="http://www.w3.org/2000/svg" className="svg-file" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg></span>
                                                    <div>
                                                        <h3 href="">Start receiving payments</h3>
                                                        <p style={{ fontSize: "0.875rem", color: 'rgba(107,114,128)' }}>Complete KYC &amp; connect your bank account</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div style={{ width: '50%', paddingRight: '1.5rem', paddingTop: '1rem' }}>
                                                <a className="pop-up" href="/admin/website-manager/domains/new/select-type">
                                                    <span className="span-tag"><svg xmlns="http://www.w3.org/2000/svg" className="svg-file" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></span>
                                                    <div>
                                                        <h3 href="">Connect custom domain</h3>
                                                        <p style={{ fontSize: "0.875rem", color: 'rgba(107,114,128)' }}>Use your own domain name!</p>
                                                    </div>
                                                </a>          </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="second-main-div">
                                <div className="users-revenue-div" style={{ height: '160px' }}>
                                    <div className="inner-div">
                                        <div className="inner-div2">
                                            <div className="svg-div">
                                                <svg className="download-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                </svg>

                                            </div>
                                            <div style={{ marginLeft: "1.25rem", flex: "1 1" }}>
                                                <h3 >Users</h3>
                                                <div style={{ marginTop: "0.5rem", flexWrap: "wrap", display: "flex", }}>
                                                    <div style={{ width: "50%" }}>
                                                        <dl><dt className="dt">Today</dt>
                                                            <div className="user-counting"> 0 </div>
                                                        </dl>
                                                    </div>
                                                    <div style={{ width: "50%" }}>
                                                        <dl><dt className="dt">Lifetime</dt>
                                                            <div className="user-counting"> 1 </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="second-main-div">
                                <div className="users-revenue-div" style={{ height: '100px' }}>
                                    <div className="inner-div">
                                        <div className="inner-div2">
                                            <div className="svg-div">
                                                <svg className="download-svg2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                                    <line x1="1" y1="10" x2="23" y2="10"></line></svg></div>
                                            <div style={{ marginLeft: "1.25rem" }}>
                                                <h3>Revenue</h3>
                                                <p style={{ color: "rgba(159,166,178)" }}>--</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="youtube-link">
                                <div className="youtube-link2">
                                    <div className="link">
                                        <a className="link-1" href="https://youtu.be/rYu_l1Qg1j8">
                                            <div className="middle-div" style={{ background: 'url(https://pu.tmcdn.in/defaults/landing/dashboard-home.jpg)' }}>
                                                <div className="video-icon">
                                                    <span style={{ color: 'rgba(229,231,235)' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="para-added">Learn to use Teachmore in 10 minutes</div>
                                        </a>
                                    </div>
                                    <div className="link" >
                                        <a className="link-1" href="https://teachmore-1.wistia.com/medias/q25y6pl91h">
                                            <div className="middle-div" style={{ background: 'url(https://source.unsplash.com/n31x0hhnzOs/1600x900)' }}>
                                                <div className="video-icon">
                                                    <span style={{ color: 'rgba(229,231,235)' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="para-added"> Why mobile apps built with Teachmore are better?</div>
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="side-big-div" style={{ width: '33%', marginTop: '20px' }}>
                            <div style={{ width: '95%' }}>
                                <div className="side-inner-div">
                                    <div style={{ fontWeight: '520rem', fontSize: '13px', textTransform: 'uppercase', color: 'rgba(159,166,178)' }}>Academy Links</div>
                                    <div className="website-part">
                                        <div style={{ fontWeight: '600', fontSize: '1rem' }}>Website</div>
                                        <a className="anchor-tag" href="https://sample-academy.teachmore.com?preview=true">https://sample-academy.teachmore.com</a>
                                    </div>
                                </div>

                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <div className="right-end">
                                    <div style={{ flex: '1 1' }}>
                                        <h2 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Looking for help with Teachmore features?</h2>
                                        <p className="p-tag">
                                            Refer our product knowledge base for guides, tutorials, answers to frequently asked questions, and much more.</p>
                                    </div>
                                    <div className="help-center">
                                        <a href="https://help.teachmore.com" className="anchor-tag1">Visit help center</a>
                                        <a href="#" className="anchor-tag1">Chat with support team</a>
                                    </div>
                                    <div className="help" style={{ marginTop: '1rem' }}>
                                        <div className="help-teachmore" style={{ display: 'flex' }}>
                                            <span style={{ color: 'rgba(159,166,178)' }}><svg xmlns="http://www.w3.org/2000/svg" className="svg-file" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg></span>
                                            <a href="mailto:help@teachmore.com" className="a-tag">
                                                help@teachmore.com

                                            </a>
                                        </div>

                                        <div className="phone-section" style={{ display: 'flex' }}>
                                            <span style={{ color: 'rgba(159,166,178)' }}><svg xmlns="http://www.w3.org/2000/svg" className="svg-file" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg></span>
                                            <div className="phone" style={{ flexDirection: 'row' }}>
                                                <p className="a-tag">
                                                    08035242274</p><span style={{ color: 'rgba(159,166,178)', fontSize: '.875rem' }}> 9am to 7pm everyday ! </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>


        </>
    );
}

export default Home;