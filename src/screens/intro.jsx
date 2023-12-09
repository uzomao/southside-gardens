import React, { useState, useRef } from 'react'
import '../styles/intro.css'

const Intro = ({ setCurrentScreenName, screenNames, setVisitorDetails }) => {

    const questions = [
        'What is your name?',
        'And what would you like to name your garden?'
    ]

    const [ currentStep, setCurrentStep ] = useState(0)
    const [ answers, setAnswers ] = useState([])

    const inputRef = useRef(null)

    const saveAnswer = () => {
        const answersCopy = [...answers, inputRef.current.value]
        setAnswers(answersCopy)

        if(currentStep < questions.length - 1){
            setCurrentStep(currentStep + 1)
        } else {
            setVisitorDetails(answersCopy)
            setCurrentScreenName(screenNames[screenNames.garden])
        }

        inputRef.current.value = ''
    }

    return (
        <div className='overlay intro-container'>
            <div className='intro-form-group'>
                { currentStep === 0 ? <p>Hello</p> : <p>Welcome {answers[0]}</p> }
                <p>{questions[currentStep]}</p>
                <input type="text" id="name" ref={inputRef} />
            </div>
            <button onClick={() => saveAnswer()}>Enter</button>
        </div>
    )
}

export default Intro