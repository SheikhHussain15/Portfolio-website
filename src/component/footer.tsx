import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-div1">My Developer Portfolio</div>

                <div className="footer-div2">
                    <p>Pages</p>
                    <ul>
                        <li ><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contact'}>Contact Me</Link></li>
                    </ul>
                </div>
                
                <div className="footer-div3">
                    <p>Social Media Links</p>
                    <ul>
                        <li><a href="https://github.com/SheikhHussain15">Git Hub</a></li>
                        <li><a href="https://vercel.com/hussain-razas-projects">Vercel</a></li>
                        <li><a href="https://www.linkedin.com/in/hussain-raza-0704a32b6/">LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                    </ul>
                </div>


            </div>


            <div className="footer-bottom">
                <p>CopyRight &#169; Myportfolio.com | All rights are presereved</p>
            </div>
        </div>
    )
}