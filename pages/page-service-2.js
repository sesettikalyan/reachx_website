/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";


function Service2() {
    return (
        <>

            
                <section className="section-box">
                    <div className="pt-20 pl-20  d-flex">
                    <h1 className="text-heading-1 text-start color-gray-900"  style={{
                        padding:'20px'
                    }}>Partners</h1>
                    <img src="/assets/imgs/page/homepage4/img/handshake.png" alt="reachx " style={{
                        width:'60px',height:'60px',paddingTop:'20px'
                    }} />
                    </div>
                    <div className="partners "
                     style={{
                            display:'flex',
                            justifyContent:'space-around',
                            marginTop:'5%'
                     }}>
                        <div className="partners1" style={{
                            width:'250px',
                            height:'150px'}}>
                            <img src="/assets/imgs/page/homepage4/img/execution.jpeg" alt="reachx" style={{
                                width:'250px',
                                height:'150px'}}/>
                            <p className="text-center fs-4"><strong>Community Partner</strong></p>
                        </div>
                        
                        <div className="partners3" style={{
                            width:'250px',
                            height:'150px'}}>
                            <img src="/assets/imgs/page/homepage4/img/execution.jpeg" alt="reachx" style={{
                                width:'250px',
                                height:'150px' }}/>
                            <p className="text-center fs-4"><strong>Technology Partner</strong></p>
                        </div>
                    </div>
                    <div className="partners "
                     style={{
                            display:'flex',
                            justifyContent:'space-around',
                            marginTop:'5%'
                     }}>
                        <div className="partners1" style={{
                            width:'150px',
                            height:'150px'}}>
                            <img src="/assets/imgs/page/homepage4/img/execution.jpeg" alt="reachx" style={{
                                width:'150px',
                                height:'150px'}}/>
                            <p className="text-center fs-4"><strong>Community Partner</strong></p>
                        </div>
                        
                        <div className="partners3" style={{
                            width:'150px',
                            height:'150px'}}>
                            <img src="/assets/imgs/page/homepage4/img/execution.jpeg" alt="reachx" style={{
                                width:'150px',
                                height:'150px' }}/>
                            <p className="text-center fs-4"><strong>Technology Partner</strong></p>
                        </div>
                        
                    </div>
                </section>
           

        </>
    )
}

export default Service2;