import React from 'react'
import TrendTag from './TrendTag'

function TrendTagList() {
  return (
    <>
        <ul className="trend-tag-list">
            <TrendTag tagName={'IPL'}/>
            <TrendTag tagName={'MS Dhoni'}/>
            <TrendTag tagName={'RD Sharma'}/>
            <TrendTag tagName={'Maths'}/>
            <TrendTag tagName={'Ariana Grande'}/>
            <TrendTag tagName={'Physics'}/>
            <TrendTag tagName={'Python'}/>
            {/* <TrendTag tagName={'JS'}/> */}
        </ul>
    </>
  )
}

export default TrendTagList