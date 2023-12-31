import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ setshow }) => {
    const Inputref = useRef();
    const naviagate = useNavigate();
    const handlesearchbar = (e) => {
        if (e.key == "Enter") {
            const inputvalue = Inputref?.current?.value;
            alert(inputvalue)
            setshow(false)
            naviagate(`/search/${inputvalue}`)
        }
    }
    return (
        <div className="searchbar" >
            <h2>Search Your Favourite Coins</h2>
            <input type="text" placeholder='search' onKeyDown={handlesearchbar} ref={Inputref} />
        </div>
    )
}

export default Searchbar
