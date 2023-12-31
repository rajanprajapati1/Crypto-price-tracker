import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <div className='Loader'>
       <CircularProgress
                    style={{ color: "#fe9416" }}
                    size={250}
                    thickness={1}
                />
        </div>
    )
}

export default Loader
