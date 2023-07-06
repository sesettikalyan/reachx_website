/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left ">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img className="h-50 w-50" alt="Agon" src="/assets/imgs/page/homepage4/img/logo1.png" /> : <img className="h-50 w-50" alt="Agon" src="/assets/imgs/page/homepage4/img/logo1.png" />}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav ">
                                <nav className="nav-main-menu d-none d-xl-block text-end">
                                    <ul className="main-menu ">
                                        <li>
                                            <Link href="/" >Home</Link>
                                        </li>   
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Company</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-service-1" legacyBehavior><a className="closer">Key People</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2" legacyBehavior><a className="closer">Partners</a></Link>
                                                </li>
                                                
                                                <li>
                                                    <Link href="/page-pricing-1" legacyBehavior><a className="closer">The Brandwall</a></Link>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        
                                         
                                        
                                        
                                    </ul>
                                </nav>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;