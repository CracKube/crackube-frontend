import React from 'react'
import Card from '../../Assets/giftCard.svg'
import Card1 from '../../Assets/giftCard1.svg'
import Card2 from '../../Assets/giftCard2.svg'
const RewardSystem = ({title, value, type}) => {
  return (
    <div className="reward-cover">
    <p>{title}</p>
    <div className="reward-section">

    <img className='img2' src= {Card1} alt="" />
      <img className='img3' src= {Card2} alt="" />
      <img className='img1' src= {Card} alt="" />
      

      
      
    </div>
    <div className="wallet-buttons">
      <button className="earn-money">Earn Money</button>
    </div>
  </div>
  )
}

export default RewardSystem