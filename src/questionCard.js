import React from 'react'

export default function QuestionCard({quiz}) {
  return (
    <div className='question-card'>
        <h3>{quiz.question}</h3>
    </div>
  )
}