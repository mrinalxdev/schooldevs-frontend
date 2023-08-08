import React from 'react'
import { Link } from 'react-scroll'

const MobileNavLinks = ({setToggle, link, href}) => {
  return (
    <li className="list-none cursor-pointer mr-8">
    <Link
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
      onClick={(prev) => setToggle(!prev)}
      className="font-bold transition-all duration-300"
    >
      {link}
    </Link>
  </li>
  )
}

export default MobileNavLinks
