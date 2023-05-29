import './App.css';
import { useState } from 'react';
import PollDispaly from './Components/PollDispaly';
import UserParticipation from './Components/UserParticipation';
import ThankYouMessage from './Components/ThankYouMessage';
import AnotherUserParticipation from './Components/AnotherUserParticipation';
import Timmer from './Components/Timmer';


function App() {


  const [data, setData] = useState({
    
    "question": "What is your favorite programming language?",
    "choices": [
  
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 },

      { "id": 5, "label": "PHP", "votes": 0 }
    
    ]
  }) 

    const [chechVote, setchechVote] = useState(false)


    function handleAntherParticipant(){
        setchechVote(false)
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light' style={{height: "793px"}}>
      
      <div className='w-75 border bg-white rounded shadow' style={{height: "700px"}}>
        <h1 className='text-center pt-3 rounded-top pb-3 bg-dark text-white'>Polling App</h1>
        <PollDispaly data={data}/>
      
        <div className='d-flex justify-content-center align-items-center flex-column rounded-bottom' style={{height: "43%"}}>
          {chechVote ? <ThankYouMessage /> : <UserParticipation data={data} setData={setData} setchechVote={setchechVote}/>}
          
          {chechVote ? <AnotherUserParticipation handleAntherParticipant={handleAntherParticipant}/> : null}
        </div>
        
      </div>
      


      {/* <Timmer /> */}


    </div>
    );
}

export default App;
