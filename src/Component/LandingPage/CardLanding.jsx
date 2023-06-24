import React from 'react'
import './cardLanding.css';
import blockDummy from '../../Assets/blockDummy.png'

const CardLanding = () => {
  return (

    <div className='main_cardDiv'>
      <div className='comp_cardDiv'>
        <div className='img_div'>
          <img className='card_img' src={blockDummy} alt='dummgimg' />

        </div>
        <div>
        <h2 className='card_title'> Ask Questions .</h2>
        <p className='card_content'> Lorem ipsum dolor tur licabo, molestias provident sint possimus fuga voluptas aut neque molestiae nemo.</p>
        </div>
      </div>
      <div className='comp_cardDiv'>
        <div className='img_div'>
        <img className='card_img' src={blockDummy} alt='dummgimg' />

        </div>
        <div>
        <h2 className='card_title'> Write a Blog .</h2>
        <p className='card_content'> Lorem ipsum dolor tur adipisiciexplicabo, molestias provident sint possimus fuga voluptas aut neque molestiae nemo.</p>
        </div>
      </div>
      <div className='comp_cardDiv'>
        <div className='img_div'>
        <img className='card_img' src={blockDummy} alt='dummgimg' />

        </div>
        <div>
        <h2 className='card_title'> Code .</h2>
        <p className='card_content'> Lorem ipsum dolor tur adipisicing elicabo, molestias provident sint possimus fuga voluptas aut neque molestiae nemo.</p>
        </div>
      </div>
    </div>
  )
}

export default CardLanding
