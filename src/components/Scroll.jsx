import React from 'react';
import { CiDesktopMouse1 } from 'react-icons/ci';
import { Link } from 'react-scroll';

const Scroll = () => {
  return (
        <Link to='content' smooth={true} duration={1000}>
      <div className='btn_scroll' >
          <CiDesktopMouse1 />
      </div>
        </Link>
  );
};

export default Scroll;
