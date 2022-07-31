import {useState} from 'react';
import QuestionCard from './questionCard';

function App() {

  const [quizzes, setQuizzes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const fetchQuiz = async () => {
    const res = await fetch ('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
    const {results} = await res.json();
    setQuizzes(results)

    //Getting all Answer
    const initialQuestionIndex = results[currentQuestionIndex]
    const answer = [initialQuestionIndex.correct_answer, ...initialQuestionIndex.incorrect_answers] 

    setCorrectAnswer(answer);
    setLoaded(true)
    setStartQuiz(true)
    console.log(results);
  }

  return (

    <section >
      {!startQuiz && <button onClick={fetchQuiz}>Start Quiz</button>}

      <div className="container">
        {loaded && <QuestionCard quiz={quizzes[currentQuestionIndex]}/>}
      </div>

    </section>
  );
}

export default App;
