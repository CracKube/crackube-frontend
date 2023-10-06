import React from 'react'

function Tags({theme, answer}) {
  return (
    <div className='ans-tags' id = {theme}>
        {
          answer && answer.questionTags.map((tag) => {
            return(
              <div className='ans-tag'>
                {tag}
              </div>
            )
          })
        }
    </div>
  )
}

export default Tags