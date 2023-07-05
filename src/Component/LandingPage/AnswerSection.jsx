import React from 'react'
import './AnswerSection.css'
import doyourway from '../../Assets/DOITYOURWAY.png'
import earnmoney from '../../Assets/EARNMONEY.png'
import anscontainer from '../../Assets/Answer_container.png'


const AnswerSection = () => {
  return (
    <div className='ans_main_div'>
      <div className='ans_head_div'>
        <h1 className='ans_head_text'>Answer</h1>
      </div>
      <div className='grid_layout'>
        <div className='grid_layout_left'>
          
          <div className='grid_layout_subleft1'>
             <img className='grid_layout_subleft1_img ' src={doyourway} alt='Your Way'/> 
          </div>
          <div className='grid_layout_subleft2'>
            <h1 className='grid_layout_headtexts subleft_head'>10,00,000</h1>
            <p className='subleft_text'>SOLVED ANSWERS</p>
          </div>
        </div>
        <div className='grid_layout_right'>
          
          <div className='grid_layout_subright1'>
          <h1 className='grid_layout_headtexts subright_head'>DOUBTS</h1>
          <p className='subright_text'>Clear It Right Away</p>
          </div>
          <div className='grid_layout_subright2'>
            <img className='grid_layout_subright2_img' src={earnmoney} alt='Earn Money'/>
  
          </div>
        </div>
      </div>
      <div className='bottom_layer_grid'>
        <div className='bottom_left'>
          <img className='bottom_left_img ansimg1' src={anscontainer} alt='ans_container'/>
          <img className='bottom_left_img ansimg2' src={anscontainer} alt='ans_container'/>
        </div>
        <div className='bottom_right'>
          <p className='bottom_right_text'>I don’t know what you will do getting <span>good CGPA</span>. It’s of no use. Focus on your practical knowledge and don’t focus on Money(It’s a byproduct dw).
              If you Like it Take it or Leave it!!</p>
        </div>
      </div>
    </div>
    
  )
}

export default AnswerSection
