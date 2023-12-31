import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import { InputLabel } from '@mui/material';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaOctopusDeploy } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = ({ handleChange, currency }) => {

    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://1000logos.net/wp-content/uploads/2018/05/Bitcoin-Logo-500x281.png" alt="" />
                <Link to={"/"}>
                    <h2>Crypto Tracker</h2>
                </Link>
            </div>
            <div className="maker">
                <strong> Made By ❤️ Rajan</strong>
            </div>
            <div className="social_icons">
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
            <div className="menu">
                <FormControl fullWidth className='select'>
                    <Select
                        className="s"
                        value={currency}
                        onChange={handleChange}
                    >
                        <MenuItem value={"INR"}>₹ INR</MenuItem>
                        <MenuItem value={"USD"}>$ USD</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Navbar
