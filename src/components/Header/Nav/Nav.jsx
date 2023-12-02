import React from 'react'

const Nav = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className='nav'>
      <ul className='list'>
        <li><a href="#" className='link' onClick={() => scrollToSection('homeSection')}>Главная</a></li>
        <li><a href="#" className='link' onClick={() => scrollToSection('filterSection')}>Меню</a></li>
        <li><a href="#" className='link' onClick={() => scrollToSection('deliverySection')}>Контакты</a></li>
      </ul>
    </nav>
  )
}

export default Nav