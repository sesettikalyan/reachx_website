/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import "../styles/Home.module.css";

function Service1() {

    return (
        <>

            
                <section className="people h-100">
                    <div>
                        <Link href="/" style={{
                            position:'absolute',
                            textDecoration:'none',
                            fontSize:'25px',
                            right:'25px',
                            top:'20px',
                        }}>Home</Link>
                    </div>
                    <div className="key-people  d-flex ">
                        <div className="head2" >
                            <h1 className="m1 text-heading-1 text-start color-gray-900 ">KEY <br />PEOPLE</h1>
                            <div className="director ">
                                <img className="p-20 rounded-circle " src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center text-white"><strong>Mr Dhanesh</strong></h4>
                                <p className="text-center fs-5 p-10 "><strong>Managing Director</strong></p>
                                <h6 className="text-center p-10">4+ years of expertise driving transformative solutions in operations, strategy, and innovation across diverse business fields.</h6>
                            </div>
                        </div>
                            <div className="manager">
                                <img className="p-20 w-5" src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center text-white"><strong>Mr Prabhakar Rao</strong></h4>
                                <p className="text-center text-white fs-5 p-10 "><strong>CMO, Client Relation <br />Manager.</strong></p>
                                <h6 className="text-center text-white p-10">4+ years of expertise <br />in marketing and lead<br /> generation across various <br /> business domains.</h6> 
                            </div>
                            <div className="digital k">
                                <img className="p-20 rounded-circle "  src="/assets/imgs/page/homepage4/img/research.jpeg" alt="" />
                                <h4 className=" text-center  text-white"><strong>Mr Suresh kumar</strong></h4>
                                <p className="text-center fs-5 p-10 "><strong>Digital Marketing Manager.</strong></p>
                                <h6 className="text-center p-10">7+ years of expertise in data-driven digital marketing, developing impactful strategies to create a lasting impact in various business domains</h6>
                            </div>
                    </div>
               
                </section>

            

        </>
    )
}

export default Service1;
