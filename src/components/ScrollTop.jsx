import React, { useState } from 'react'
import { FaCaretSquareUp } from 'react-icons/fa'

// source: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/

export default function ScrollTop() {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	if ((document.documentElement.scrollTop) > 500) {
	    setVisible(true)
	}
	else if ((document.documentElement.scrollTop) <= 500) {
	    setVisible(false)
	}
}

const scrollToTop = () =>{
	window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	})
}

window.addEventListener('scroll', toggleVisible)

return (
	    <FaCaretSquareUp 
            onClick={scrollToTop}
            className='scroll-button'
	        style={{display: visible ? 'inline' : 'none'}} 
        />
)
}
