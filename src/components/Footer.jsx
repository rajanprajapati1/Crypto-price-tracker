import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaOctopusDeploy } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer_one">

                <div className="footer_logo">
                    <img src="https://1000logos.net/wp-content/uploads/2018/05/Bitcoin-Logo-500x281.png" alt="" />
                    <Link to={"/"}>
                        <h2>Crypto Tracker</h2>
                    </Link>
                </div>
                <div className="footer_flex">
                    <div className="first">
                        <ul>
                            <h3>Community</h3>
                            <li>About</li>
                            <li>Submit on issue</li>
                            <li>Github Repo</li>
                            <li>Stack</li>
                        </ul>
                    </div>
                    <div className="second">
                        <ul>

                            <h3>Getting Started</h3>
                            <li>Introduction</li>
                            <li>Documention</li>
                            <li>Usage</li>
                            <li>Globals</li>
                            <li>elements</li>
                            <li>Collections</li>
                        </ul>
                    </div>
                    <div className="third">
                        <ul>
                            <h3>Resources</h3>
                            <li>Api</li>
                            <li>Forums</li>
                            <li>Visibility</li>
                            <li>Accessibility</li>
                            <li>Community</li>
                            <li>Design Defined</li>
                            <li>MarketPlace</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer_span">
                <div className="copy">
                    <span>@ 2024 Crypto Tracker. All Right Reserved</span>
                </div>
                <div className="other_links">
                    <span>Terms of Services</span>
                    <span>Privacy Policy</span>
                    <span>Security</span>
                    <span>Sitemap</span>
                </div>
                <div className="footer_social_icons">
                    <a href="https://linkedin.com/rajanprajapati1">
                        <FaLinkedin className='ico' />
                    </a>
                    <a href="https://github.com/rajanprajapati1" content='__blank'>
                        <FaGithub className='ico' />
                    </a>
                    <a href="https://instagram.com/r.a.jan_">
                        <FaInstagram className='ico' />
                    </a>
                    <a href="https://app.netlify.com/teams/prajapatirajan776">
                        <FaOctopusDeploy className='ico' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
