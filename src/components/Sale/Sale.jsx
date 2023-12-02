import React from 'react'
import Button from '../Button/Button'

const Sale = () => {
  return (
    <div className='hero_wrap'>
      <div>
        <h1 className='hero_title'>10% скидки на все бургеры!</h1>
        <p className='hero_description'>
          Общая сумма заказа должна быть больше или равна 70 000 сум. Предложение не распространяется на доставку.
          Акция "Товар дня" продлится до 31.12.2022. следите за предложениями!
        </p>
      </div>
      
      <Button className='hero_link'>В меню</Button>
    </div>
  )
}

export default Sale