import React, { useState } from 'react';
import "./Quiz.css"
import {Link } from "react-router-dom"
export default function Quiz() {
	const questions = [
		{
			questionText: 'How was your day Today?',
			answerOptions: [
				{ answerText: 'Not good', isCorrect: false },
				{ answerText: 'Very bad', isCorrect: false },
				{ answerText: 'Good', isCorrect: true },
				{ answerText: 'Awesome', isCorrect: false },
			],
		},
		{
			questionText: 'Did you feel stressed today?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Somewhat', isCorrect: false },
				{ answerText: 'Very much', isCorrect: false },
			],
		},
		{
			questionText: 'Do you have someone to share your stress with?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true },
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Yes,but I prefer not to talk', isCorrect: false },
				{ answerText: 'No,But I can have someone to talk to', isCorrect: false },
			],
		},
		{
			questionText: 'Do you love chatting with different people?',
			answerOptions: [
				{ answerText: 'No', isCorrect: false },
				{ answerText: 'Very little', isCorrect: false },
				{ answerText: 'Somewhat yes', isCorrect: false },
				{ answerText: 'Yes', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div className="cont">
		<div className='app'>
			{showScore ? (
                {score}<3?
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>:<div className='score-section'>You need some stress reliever.
                <Link to="/break">Take a break</Link></div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}
