import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { images } from "../constant";
import { Link } from "react-router-dom";


import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

function NavBar(props) {
    return (
        <nav>
            <div className="bg-[#f5f5f5] flex gap-2 justify-between items-center pl-5 pr-5">

                <div className="flex gap-2 py-5 ">
                    < FaFacebookF className="hover:text-orange-500"/>
                    < FaTwitter className="hover:text-orange-500" />
                    < FaPinterest className="hover:text-orange-500" />
                    < FaGooglePlusG className="hover:text-orange-500" />
                    < FaInstagram className="hover:text-orange-500" />

                </div>
                <p>
                    Free shipping for standard order over $100
                </p>


                <div className="flex gap-3 ">

                    <p>

                        fashe@example.com

                    </p>

                    <select className="">
                        <option value="">USD</option>
                        <option value="">CAD</option>
                        <option value="">EUR</option>
                        <option value="">PKR</option>
                        <option value="">JPY</option>
                        <option value="">GBP</option>
                    </select>
                </div>


            </div>
                
            <div className="w-full h-20 bg-white flex items-center justify-between pl-3 pr-5 shadow-lg">
                  <img src={images.ImgLogo.Logo} alt="" />


                  <div className=" flex gap-3 ">
                    <Link to={"/"}><a className="hover:text-orange-400 " href="">Home</a></Link>
                    <Link to={"/Shop"}><a className="hover:text-orange-400 "href="">Shop</a></Link>
                    <Link to={'/Sale'}><a className="hover:text-orange-400 "href="">Sale</a></Link>
                    <Link to={'/Features'}><a className="hover:text-orange-400 "href="">Features</a></Link>
                    <Link to={'/Blog'}><a className="hover:text-orange-400 "href="">Blog</a></Link>
                    <Link to={'/About'}><a className="hover:text-orange-400 "href="">About</a></Link>
                    <Link to={'/Contact'}><a className="hover:text-orange-400 "href="">Contact</a></Link>
                  </div>


                <div className="flex gap-5 items-center ">
                    < FaRegUserCircle className="text-3xl" /> <span className="w-0.5 h-5 text-black"></span>
                    < MdOutlineShoppingBag className="text-3xl" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;