import React, { useEffect, useState } from 'react'
import Coin from '../components/Coin'
import { FetchCoins } from '../store/actions.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Footer from '../components/Footer.jsx';
import { Link } from 'react-scroll';
import Scroll from '../components/Scroll.jsx'


const Homepage = ({ currency }) => {
  const [Page, setPage] = useState(1);
  const dispatch = useDispatch()
  const Coinslist = useSelector(state => state.coins);
  useEffect(() => {
    dispatch(FetchCoins(currency, Page))
  }, [currency, Page])


  return (<>
    <div>

      <Scroll />
      <Coin Coinslist={Coinslist?.coins} currency={currency} />
      <div className="pagination">
        <Link to='content' smooth={true} duration={1000}>
          <button disabled={Page <= 1} onClick={() => { setPage(Page - 1) }}>
            <IoIosArrowRoundBack /> Prev
          </button>
        </Link>
        <Link to='content' smooth={true} duration={1000}>

          <button onClick={() => { setPage(Page + 1) }}>Next <IoIosArrowRoundForward /></button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Homepage
