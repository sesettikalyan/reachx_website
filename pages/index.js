import Link from "next/link";
import { useState } from "react";
import axios from 'axios';
import Layout from "../components/layout/Layout";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };
    const [open, setOpen] = useState(false);
    const [reopen,setReopen]=useState(false);
    const [rereopen,setRereopen]=useState(false);
    const [close,setClose]=useState(false);

     
        const handleClick = () => {
            setOpen((prevOpen) => !prevOpen);
        };
        const handleOpen = () => {
            setReopen((prevReopen) => !prevReopen);
        };
        const handleReopen = () => {
            setRereopen((prevRereopen) => !prevRereopen);
        };
        const handleClose = () => {
            setClose((prevClose) => !prevClose);
        };
        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [message,setMessage]=useState('');
        const[number,setNumber]=useState('');
        const handleSubmit = (e) => {
            // const formEle = document.querySelector("form");
            e.preventDefault();
            // console.log(name,email,message)
            const data ={
            Name:name,
            Email:email,
            Mobile:number,
            Message:message
            }
            axios.post('https://sheet.best/api/sheets/fb1bd363-ae6d-481b-9a1a-1dad29d77906',data).then((response)=>{
            console.log(response)
            setName('');
            setEmail('');
            setMessage('');
            setNumber('');
            })
        }
      
    
    return (
        <>
            <Layout>
                <section className="me section-box ">
                    <div className="banner-hero banner-4">
                        <div className="container">
                            <div className="row">
                                <div className="titles col-lg-7">
                                    <h1 className=" text-display-2 color-white">Advanced analytics to grow your business</h1>
                                    <p className="text-body-lead-large color-white mt-30 pr-40">Aim is to be a one-stop solution for all your business empire needs</p>
                                      </div>
                                <div className="col-lg-5 d-lg-block">
                                    <div className="banner-imgs">
                                 
                                        <img className="" alt="Agon" src="assets/imgs/page/homepage4/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about mt-80">
                    <div className="container">
                        <div className="flex row">
                            <div className=" mt-50">
                                <h2 className="text-heading-1 color-gray-900 mb-30">How to think of us?</h2>
                                <p className="para text-body-excerpt color-gray-600 p-10">A business service company specializing in management, operations, and marketing, we help in the growth acceleration of businesses by creating a brand experience and focused strategic growth. </p >

                                <p className="para text-body-excerpt color-gray-600 p-10">Our automated operations and marketing strategy enable you to focus on maintaining the quality of your products and achieving customer satisfaction. With our PR support, we will create BRAND VALUE in such a manner that you won’t feel the need to invest in sponsored channels, and your brand will continue to generate revenue - The true value.</p>

                                <p className="para text-body-excerpt color-gray-600 p-10">We only aid businesses who desire to promote their products or services in a way that elevates their brand as a whole by establishing & growing a relationship between the brand and consumers. Rather than highlighting an individual product or service- like any other typical approach, we promote the entirety of the brand, using the products and services as proof points that support the brand's promise.</p>
                            </div>
                        
                            <div className="p-10">
                                <h3 className="approach text-heading-1 color-gray-900 mb-30">The approach:</h3>
                                <div className=" pl-50 pr-100 pb-25 text-left">
                            <p className="fs-4 pb-25 w-75" style={{
                                position: 'relative',
                                borderBottom: '3px solid yellow'
                            }}> We take a comprehensive and strategic approach to address your unique challenges and drive your business's sustainable growth.</p>
                            <p className="fs-4 pt-30 w-75"> Through strategic planning, tailored solutions, and a focus on key growth drivers, we partner with businesses to help them expand their reach, increase revenue, and maximize their potential.</p>
                            </div>
                            </div>
                            <div className="p-10">
                                <h5 >We approach on growth oriented program</h5>
                            </div>
                            <div className="d-flex text-center">
                                <div className="pl-20 pr-20 pt-20 pb-10">
                                    <h3 className="mb-20"> Research</h3>
                                    <img className ="w-100 h-50" src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                </div>
                                <div className="pl-20 pr-20 pt-20 pb-10">
                                    <h3 className="mb-20">Strategy</h3>
                                    <img className ="w-100 h-50" src="/assets/imgs/page/homepage4/img/strategy.jpeg" alt="" />
                                </div>
                                <div className="pl-20 pr-20 pt-20 pb-10">
                                    <h3 className="mb-20">Execution</h3>
                                    <img className ="w-100 h-50" src="/assets/imgs/page/homepage4/img/execution.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                 <section className="serv section-box" >
                        <div className="head m-auto pl-100 ">
                            <h1 className=" text-heading-1 color-gray-900 mb-30">Services We Tailor</h1>
                        </div>
                    <div className="collapse-menu d-flex pt-25  pl-25 w-60 pb-60">
                        
                        <div className="tail1 m-auto bg-warning">
                            <Button className="btn rounded btn-warning  dropdown-toggle" type="button"  onClick={handleClick} variant="link">
                                360° Marketing
                            </Button>
                            <Collapse in={open}>
                                <div className="text-center">
                            <strong> {/* Content to be collapsed */}
                                <p>Core Marketing</p>
                                <p>Digital Marketing</p>
                                <p>Advertising</p>
                                <p>Product Launches</p></strong>
                                </div>
                            </Collapse>
                        </div>
                        
                        <div className="tail2 m-auto bg-warning">
                            <Button className="btn btn-warning dropdown-toggle" type="button" onClick={handleOpen}  variant="link">
                                Business Solutions
                            </Button>
                            <Collapse in={reopen}>
                                <div className="text-center">
                            <strong> {/* Content to be collapsed */}
                                <p>Lead Generation</p>
                                <p>Operations Management</p>
                                <p>Registrations & Legal</p>
                                <p>Services</p>
                                <p>HR & Accounting Services</p>
                                <p>Team Building</p>
                                <p>Franchise & Store</p>
                                <p>development</p>

                                </strong>
                                </div>
                            </Collapse>
                        </div>
                        <div className="tail3 m-auto bg-warning">
                            <Button className="btn btn-warning dropdown-toggle" type="button"  onClick={handleReopen}   variant="link">
                                R&D Services
                            </Button>
                            <Collapse in={rereopen}>
                                <div className="text-center">
                            <strong> {/* Content to be collapsed */}
                                <p>Market Research</p>
                                <p>Product Research</p>
                                <p>Product Analysis</p>
                                <p>Competitor Analysis</p>
                                <p>Market Capitalization</p>
                                <p>Area/location Research</p> </strong>
                                </div>
                            </Collapse>
                        </div>
                        <div className="tail4 m-auto bg-warning">
                            <Button className="btn btn-warning dropdown-toggle" type="button"  onClick={handleClose} variant="link">
                                Technology Solutions
                            </Button>
                            <Collapse in={close}>
                                <div className="text-center">
                                    <strong> {/* Content to be collapsed */}
                                        <p>Software Development</p>
                                        <p>Website Development</p>
                                        <p>Chat Boat Creation</p>
                                        <p>Website Maintenance</p>
                                    

                                    </strong>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                            
                 </section>
                 <form className="form" onSubmit={handleSubmit}>
                <div className="d-flex align-items-start">
                    <h4 className=" color-gray-900 ml-100 mb-30"><b>Tell Us More About Yourself</b></h4>
                 </div>
                 <div className="d-flex flex-column ml-130 mr-30">
                    <div className="pl-10 pb-10 pt-10 w-50" style={{border:'1px solid grey' , borderRadius:'10px '}}>
                        <label>
                        <img src="assets/imgs/page/homepage4/person.svg" alt="" /></label>
                        <input className="m ml-10 w-50 " name="name" required placeholder="Your Name" type="text" onChange={(e)=>setName(e.target.value)} value={name} style={{border:'none'}}/>
                    </div>
                    <div className="pl-10 pb-10 pt-10 mt-20 w-50" style={{border:'1px solid grey' , borderRadius:'10px '}}>
                        <label>
                        <img src="assets/imgs/page/homepage4/mail.svg" alt="" /></label>
                        <input  className="m ml-10 w-50" required name="email" placeholder="your@gmail.com" type="email" onChange={(e)=>setEmail(e.target.value)} value={email} style={{border:'none'}} />
                    </div>
                    <div className="pl-10 pt-10 pb-10 mt-20 w-50" style={{border:'1px solid grey' , borderRadius:'10px '}}>
                        <label>
                        <img src="assets/imgs/page/homepage4/mobile.svg" alt="" /></label>
                        <input  className="m ml-10 w-50" name="number" placeholder="Mobile Number(optional)" type="mobilenumber" onChange={(e)=>setNumber(e.target.value)} value={number} style={{border:'none'}} />
                    </div>
                        <textarea className="m mt-20  w-50" required name="message" placeholder="Your Message" type="text" onChange={(e)=>setMessage(e.target.value)} value={message} style={{border:'1px solid grey' , borderRadius:'10px ',height:'70px'}} />
                        <input className="button mt-20  w-50" name='submit' type="submit"  style={{border:'1px solid black' , borderRadius:'10px ',height:'30px'}} />
                </div>
            </form>
            </Layout>

        </>
    )
}

export default Home;

