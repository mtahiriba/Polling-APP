import React from 'react'

export default function PollDispaly({data}) {
  return (
    <div className='border-bottom p-5 bg-white '>
        <h2> <span className='text-success'> Poll Question: </span> {data.question}</h2>
        <h4>Answer choices with vote counts:</h4>
        {
            data.choices.map((choice) => {
                return <div key={choice.id} style={{fontSize: "18px"}}>{choice.label}: <span className='text-danger '> {choice.votes} </span> votes</div>
            })
        }
    </div>
  )
}
