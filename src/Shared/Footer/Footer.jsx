import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFax } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside className='max-w-56'>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>It is a long established fact that a reader will be distracted by the readable content.Lorem Ipsum is simply dummy text of been the industry's standard ...</p>
                    <nav>
                        <a href="#"><FaFacebookF style={{display: 'inline', marginRight: '5px', fontSize: '30px'}}/></a>
                        <a href="#"><FaXTwitter style={{display: 'inline', marginRight: '5px', fontSize: '30px'}}/></a>
                        <a href="#"><FaInstagram style={{display: 'inline', marginRight: '5px', fontSize: '30px'}}/></a>
                        <a href="#"><FaDribbble style={{display: 'inline', marginRight: '5px', fontSize: '30px'}}/></a>
                        <a href="#"><FaYoutube style={{display: 'inline', marginRight: '5px', fontSize: '30px'}}/></a>
                    </nav>
                </aside> 
                <nav>
                    <header className="footer-title">Main Menu</header> 
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Search</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Shipping Info</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Catalog</a>
                </nav> 
                <nav>
                    <header className="footer-title">Quick View</header> 
                    <a className="link link-hover">Best Product</a>
                    <a className="link link-hover">Cosmetics</a>
                    <a className="link link-hover">Beauty World</a>
                    <a className="link link-hover">Offer Collection</a>
                    <a className="link link-hover">Mega Collection</a>
                    <a className="link link-hover">Training Collection</a>
                </nav> 
                <nav>
                    <header className="footer-title">Links</header> 
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Faq</a>
                    <a className="link link-hover">Portfolio</a>
                    <a className="link link-hover">Search</a>
                    <a className="link link-hover">Wishlist</a>
                    <a className="link link-hover">Lookbook</a>
                </nav>
                <aside className='max-w-56'>
                    <header className="footer-title">Store Info</header>
                    <ul>
                        <li><FaLocationDot style={{display: 'inline', marginRight: '5px'}}/> Cosmetics Beauty Demo Store Demo Store USA</li>
                        <li><IoCall style={{display: 'inline', marginRight: '5px'}}/> Call Us: 555-756-1898</li>
                        <li><CiMail style={{display: 'inline', marginRight: '5px'}}/> Email Us: Support@pixelstrap.com</li>
                        <li><FaFax style={{display: 'inline', marginRight: '5px'}}/> Fax: 97985235</li>
                    </ul>
                </aside>
            </footer>
        </>
    );
};

export default Footer;