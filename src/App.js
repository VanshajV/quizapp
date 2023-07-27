
import './App.css';
import React, { useState } from 'react';
import Finalscore from './comp/Finalscore';

function App() {
 const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore] = useState(0);
    
    const [showResult,setShowResult]=useState(false);

      const QuizData = [
        {
            question: "What is the pH value of the human body?",
            options:[ "9.2 to 9.8", "7.0 to 7.8", "6.1 to 6.3", "5.4 to 5.6"],
            answer: 2
        },
        {
            question: "Which of the following are called Key Industrial animals?",
            options:["Producers", "Tertiary consumers", "Primary consumers", "None of these"],
            answer: 3
        },
        {
            question: "Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
            options: ["27th", "29th", "24th", "22th"],
            answer: 3
        },
        {
            question: "Elections to panchayats in state are regulated by",
            options: ["Gram panchayat", "Nagar Nigam", "Election Commission of India", "State Election Commission"],
            answer:2
        },
        {
          question: "Which of the following Himalayan regions is called 'Shivalik's'",
          options: ["Upper Himalayas", "Lower Himalayas", "Outer Himalayas", "Inner Himalayas"],
          answer:3
      },
      {
        question: "Forming of Association in India is",
        options: ["Legal Right", "Illegal Right", "Natural Right", "Fundamental Right."],
        answer:4
    },
    {
      question: "The Samkhya School of Philosophy was founded by",
      options: ["Gautam Buddha", "Mahipala", "Gopala", "Kapila"],
      answer:4
  },

    ];
    function update(){
      if(currentQuestion<QuizData.length-1){
        setCurrentQuestion(currentQuestion+1)
        
                        
      }
      else{
        setShowResult(true)
        

      }

     
     };
    

 
  return (
  
    
    <div className="flex ">
        <div className="main pt-36 flex flex-col  items-center bg-gradient-to-r from-yellow-200 to-red-100 w-[100%] min-h-screen">
        

          <div className='m-7 bg-white border-black border-2 p-2 rounded-2xl'>
            
            <h1 className='font-bold text-4xl'>Quiz App</h1>
          </div>
          <div className="top  bg-red-100 p-5  border-[3px]  rounded-md border-black w-96 ">
          {showResult ? (
                <Finalscore title={score} title2={QuizData.length}/>
            ):(
            <>

            <div className='my-3'>
            <h1>Q{currentQuestion+1}. {QuizData[currentQuestion].question}</h1>
            </div>
            <div className="ans flex flex-col space-y-1 ">
              {
                QuizData[currentQuestion].options.map((op,i)=>{
                  return(
                  
                    <button key={i} id='btn' onClick={ function update2(){
                      if(QuizData[currentQuestion].answer===i+1){
                        setScore(score+1);
                        update();
            
                        
                        
                      }
                      else{
                        update()
                      }
                
                    }}    className='mx-10 hover:bg-blue-400 text-center border-black border-2 bg-blue-200 rounded-md px-1 m'>{op}</button>
                    )
              
                }
               
                )
             
              }
             </div>
             
             </>)}
          </div>
          

        </div>
    </div>
    
  );

}
export default App;
