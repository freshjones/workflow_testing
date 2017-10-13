import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = function(){
  return (
    <nav>
      <ul>
        {[
          { route: '/', label: 'Homepage' },
          { route: '/other', label: 'Other' }
        ].map(link => (
          <li key={link.route}>
            <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
