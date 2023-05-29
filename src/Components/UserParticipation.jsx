import React from 'react'
import { useFormik } from 'formik'

export default function UserParticipation({data, setData, setchechVote}) {
  
    const formik = useFormik({
        initialValues: {
            choice: ''
        },
        onSubmit: values => {
            if(values.choice === '') return alert('Please select a choice')

            setData({
                ...data,
                choices: data.choices.map((choice) => {
                    if(choice.label === values.choice){
                        return {
                            ...choice,
                            votes: choice.votes + 1
                        }
                    }
                    return choice
                })
            })
            setchechVote(true)
        }
    });
  
    return (
    <div className=''>
        <form action="" onSubmit={formik.handleSubmit}>
            <h2>Answer Choices:</h2>
            <div role='group' onChange={formik.handleChange}>
                {
                    data.choices.map((choice) => {
                        return (
                            <>
                                <label htmlFor="" id={choice.id}><input type="radio" name='choice' value={choice.label}/> {choice.label}</label>
                                <br />
                            </>
                        )
                    })
                }
                {/* <label htmlFor=""><input type="radio" name='choice' value={"JavaScript"}/> JavaScript</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"Python"}/> Python</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"Java"}/> Java</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"C#"}/> C#</label>
                <br /> */}
                <button type='submit' className='mt-3 btn btn-primary'>Submit vote</button>
            </div>
        </form>
    </div>
  )
}
