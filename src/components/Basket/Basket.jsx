import React from 'react'

const Basket = ({ handleClick }) => {
  return (
    <div className='actions'>
      <div className='cart' onClick={handleClick}>
        <img src="/images/basket.svg" alt="" />
        Корзина
      </div>
      <div className='language'>
        <img src="/images/icon_russia.svg" alt="" />
      </div>
    </div>
  )
}

export default Basket