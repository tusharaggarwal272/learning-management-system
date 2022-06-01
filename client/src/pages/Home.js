import { Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Navbar from '../Components/Navbar'
import { Box } from '@mui/system';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
// import { TextareaAutosize } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import MenuBar from '../Components/MenuBar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';

// import { toast } from 'react-toastify'
import "./Home.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2%'
};

function Home() {

  let user = (localStorage.getItem('user'));

  if (user) {
    user = JSON.parse(user);
    // { console.log(user); console.log(typeof (user)); console.log(user.hasOwnProperty('username')) }
  }
  const [mobileverified, setMobileVerified] = useState(user ? user.mobileverified : false);
  const [emailverified, setEmailVerified] = useState(user ? user.emailverified : false);
  const [open, setOpen] = useState(!mobileverified || !emailverified);
  const [mobileotpreq, setmobileotpreq] = useState(false);
  const [emailotpreq, setemailotpreq] = useState(false);
  const [loading, setloading] = useState(false)
  const [otp, setotp] = useState();
  const [show, setShow] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState();
  const [Uploading, setUploading] = useState(false);
  const [UploadVideoButton, SetUploadVideoButton] = useState('Upload Video');
  const [progress, setProgress] = useState(0);
  // const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.preventDefault();
    setVideoModal(false);
  }

  const handleVideoFile = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      SetUploadVideoButton(file.name);
      // console.log(file);
      const videoData = new FormData();
      videoData.append("video", file);
      console.log(videoData);
      const { data } = await axios.post('/api/courses/video-upload', videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        }
      });
      console.log(data);
      setVideo(data);

    } catch (error) {
      console.log("Error while uploading the Video", error.message);
      // toast("Video Upload failed")
    }
  }


  const handleVideoRemove = async () => {
    try {
      setUploading(true);
      console.log(video);
      const { data } = await axios.post('/api/courses/video-remove', { "video": video });
      setVideo();
      console.log(data);
      setUploading(false);
      setProgress(0);
      SetUploadVideoButton("Upload Another Video");
    } catch (error) {
      setUploading(false);
      console.log("Error while removing the Video", error.message);
    }
  }

  const handleAddVideo = (e) => {

    // e.preventDefault();
    e.preventDefault();
    console.log("Clicked the handleAdd video part")
    setUploading(true);
    try {
      const videoDetail = {
        title: title,
        description: description,
        video: video
      }
      console.log(videoDetail);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }

  }

  const handlemobileotpreq = () => {
    setloading(true);
    setmobileotpreq(true);
    axios.post('/users/verification/mobileverified', { 'contact': user.contact }).then((res) => {
      console.log("mobile", res);
      setloading(false);
    })
    // setloading(false);
  };
  const handleemailotpreq = () => {
    setloading(true);
    setemailotpreq(true);
    axios.post('/users/verification/emailverified', { 'email': user.email }).then((res) => {
      console.log("email", res);
      setloading(false);
    })
  }

  const verifymobileotp = () => {
    setloading(true);
    axios.post('/users/verification/mobileverified/verify', { 'number': user.contact, otp: otp }).then((res) => {
      console.log(res);
      setMobileVerified(true);

      // localStorage.setItem('user', ...{ user, ...{ mobileverified: true } });
      user.mobileverified = true;
      setloading(false);
    })
  }

  const verifyemailotp = () => {
    setloading(true);
    axios.post('/users/verification/emailverified/verify', { 'email': user.email, otp: otp }).then((res) => {
      console.log(res);
      user.emailverified = true;
      setEmailVerified(true);
      setloading(false);
    })
  }

  const handlechange = (e) => {

    setotp(e.target.value);
    // console.log(otp)
  }



  useEffect(() => {
    // console.log(typeof (user));
    // console.log(user.mobileverified)
    setMobileVerified(user.mobileverified);
    setEmailVerified(user.emailverified);
  }, [user])

  const handleLogout = () => {
    // console.log("clicking on logout");
    localStorage.removeItem("user");
    window.location.reload();
    return;
  }


  if (user) {
    {
      // user = JSON.parse(user);
      // console.log(user)
      // setMobileVerified(user.mobileverified)
      // console.log(user, user.name)


    }
  }
  else {
    window.location.href = '/login'
  }
  return (

    <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
      <Box>
        <MenuBar />
      </Box>




      <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>

        <>
          <Button sx={{ position: 'absolute', top: '2%', right: '5%' }} onClick={handleLogout}>Logout</Button>
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
          <Box sx={{ display: 'flex', flexDirection: 'col', justifyContent: 'center', alignItems: 'center' }}>
            <Button sx={{ marginBottom: '4%', width: '80%' }} variant='contained' onClick={(e) => {
              e.preventDefault();
              setVideoModal(true)
            }}> <CloudUploadIcon /> &nbsp; Add Video Lesson</Button>

          </Box>


        </>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box variant="contained" sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              We want to know you More!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 }}>
              <Typography>Mobile No:</Typography>
              <TextField
                // label="Mobile Number"
                variant="filled"
                // sx={{, width: 1 }}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                size="small"
                value={user.contact}
              // onChange={(e) => handel({ name: e.target.value })}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                  user.mobileverified == true ? <CheckCircleOutlineOutlinedIcon sx={{ background: 'green', width: '40%', height: '60%' }} /> :
                    mobileotpreq == false ? <Button sx={{ width: '20%' }} onClick={handlemobileotpreq}>Get OTP</Button> :
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><TextField onChange={(e) => handlechange(e)} label={'Enter OTP'} size='small' sx={{ m: 1 }} />
                        {
                          loading ? <CircularProgress /> : <Button onClick={verifymobileotp}>Verify</Button>
                        }
                      </Box>

                }
              </Box>



            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 }}>
              <Typography>Email Id:</Typography>
              <TextField
                // label="Mobile Number"
                variant="filled"
                // sx={{, width: 1 }}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                size="small"
                value={user.email}
              // onChange={(e) => handel({ name: e.target.value })}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                  emailverified == true ? <CheckCircleOutlineOutlinedIcon sx={{ background: 'green', width: '40%', height: '60%' }} /> :
                    emailotpreq == false ? <Button sx={{ width: '20%' }} onClick={handleemailotpreq}>Get OTP</Button> :
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><TextField label={'Enter OTP'} onChange={(e) => handlechange(e)} sx={{ m: 1 }} size='small' />
                        {
                          loading ? <CircularProgress /> : <Button onClick={verifyemailotp}>Verify</Button>
                        }
                      </Box>

                }
              </Box>
              {/* <Button sx={{ width: '20%' }} onClick={handleemailotpreq}>Get OTP</Button> */}

            </Box>



          </Box>
        </Modal>

        <Modal open={videoModal} onClose={handleClose}>
          <Box sx={style2}>

            <Typography>Uploading the Video Lesson</Typography>
            <TextField sx={{ padding: '2%', width: '100%' }} value={title} placeholder='Enter the title of the Video Lesson' onChange={(e) => { setTitle(e.target.value) }}></TextField>
            {/* <TextareaAutosize value={description} placeholder='Description...' onChange={(e) => { setDescription(e.target.value) }} /> */}
            <textarea
              // sx={{ padding: '2%', width: '150%' }}
              rows={7}
              cols={60}
              value={description}
              // aria-label="empty textarea"
              placeholder="Enter the Description for the Lesson"
              // style={{ width: 200 }}
              onChange={(e) => { setDescription(e.target.value) }}

            />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <label style={{ background: 'black', color: 'white', width: '100%', padding: '2%', margin: '2%', display: 'flex', justifyContent: 'space-around' }} >
                {UploadVideoButton}
                <input onChange={handleVideoFile} type={"file"} accept="video/*" hidden />
                {
                  progress === 100 && <Button variant='contained' ><CancelIcon onClick={handleVideoRemove} /></Button>
                }
              </label>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Box sx={{ width: '100%', margin: '0' }}>{(progress > 0 && progress !== 100) && <LinearProgress value={progress} />}</Box>
                {(progress > 0 && progress !== 100) && <Typography>{progress}%</Typography>}

              </Box>
            </Box>

            <Button disabled={Uploading} sx={{ margin: '2%', width: '100%' }} variant='contained' fullWidth onClick={(e) => handleAddVideo}>SAVE</Button>

          </Box>

        </Modal>
      </Box >
    </Box >

  )
}

export default Home
