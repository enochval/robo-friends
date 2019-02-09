import React from 'react'
import './Scroll.css'

const Scroll = ({ children }) => {
    return (
        <div className="scrollbar" style={{ overflowY: 'scroll', border: '5px solid black', height: '80vh'}}>
            {children}
        </div>
    )
}

export default Scroll