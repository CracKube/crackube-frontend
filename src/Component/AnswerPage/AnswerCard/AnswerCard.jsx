import React from 'react'
import styles from './AnswerCard.module.css'
import { Heading, AnswersCard } from '../../Constants'

const AnswerPage = () => {
  return (
    <div className={styles.answercard}>
        <Heading text="2 Answers"/>
        <AnswersCard />
        <AnswersCard />
    </div>
  )
}

export default AnswerPage