/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";
import "../styles/Home.module.css";

function Service1() {

    return (
        <>

            
                <section className="section-box h-100">
                    <div>
                        <Link href="/" style={{
                            position:'absolute',
                            textDecoration:'none',
                            fontSize:'25px',
                            right:'25px',
                            top:'20px'
                        }}
                        >Home</Link>
                    </div>
                    <div className="key-people d-flex " style={{
                        justifyContent:'space-between'
                    }}>
                        <div className="head" 
                            style={{
                                marginLeft: '30px',
                                marginRight: '30px',
                                margin:'30px'
                                
                            }}
                        >
                            <h1 className="text-heading-1 text-start color-gray-900 ">KEY <br />PEOPLE</h1>
                            <div className="director bg-warning "
                                style={{
                                width:'450px',
                                marginBottom:'-30px'
                                }}
                            >
                                <img className="p-20 rounded-circle " src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center text-black"><strong>Mr Dhanesh</strong></h4>
                                <p className="text-center fs-5 p-10 "><strong>Managing Director</strong></p>
                                <h6 className="text-center p-10">4+ years of expertise driving transformative solutions in operations, strategy, and innovation across diverse business fields.</h6>
                            </div>
                        </div>
                            <div className="manager  bg-secondary "
                                style={{
                                    height:'40%'
                                }}
                            >
                                <img className="rounded-circle p-20 w-5" src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center text-black"><strong>Mr Prabhakar Rao</strong></h4>
                                <p className="text-center fs-5 p-10 "><strong>CMO, Client Relation <br />Manager.</strong></p>
                                <h6 className="text-center p-10">4+ years of expertise <br />in marketing and lead<br /> generation across various <br /> business domains.</h6> 
                            </div>
                            <div className="digital bg-warning"
                                style={{
                                    marginLeft: '30px',
                                    marginRight: '30px',
                                    marginTop:'150px',
                                    width:'450px',
                                    
                                    
                                }}
                            >
                                <img className="p-20 rounded-circle " src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center text-black"><strong>Mr Suresh kumar</strong></h4>
                                <p className="text-center fs-5 p-10 "><strong>Digital Marketing Manager.</strong></p>
                                <h6 className="text-center p-10">7+ years of expertise in data-driven digital marketing, developing impactful strategies to create a lasting impact in various business domains</h6>
                            </div>
                    </div>
               
                </section>

            

        </>
    )
}

export default Service1;