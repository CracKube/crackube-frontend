import React from 'react'
import styles from './AnswerCard.module.css'
import { Heading, AnswersCard } from '../../Constants'

const AnswerPage = () => {
  return (
    <div className={styles.answercard}>
        <Heading text="2 Answers"/>
        <AnswersCard heading="Possible Data Inconsistencies:" likes="4k" dislikes="1k"/>
        <AnswersCard heading="Possible Data Inconsistencies:" likes="4k" dislikes="1k" />
    </div>
  )
}

export default AnswerPage