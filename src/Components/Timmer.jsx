import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Timmer() {
  
    let interval = undefined
  const [time, setTime] = useState(10)
  

  useEffect(() => {
    interval = setTimeout(() => {
        setTime((prevCount) => prevCount - 1)
    }, 1000)

    if(time === 0){
        clearTimeout(interval)
    }
  })
    return (
    <div>
        {
            time === 0 ? <h1>Time is up</h1> : <h1>Time left: {time}</h1>
        }

    </div>
  )
}
