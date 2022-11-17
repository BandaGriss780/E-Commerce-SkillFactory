import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UserPage = () => {

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div>UserPage</div>

            <button className='btn btn-lg btn-dark btn-md'
                onClick={onNavigateBack}
            >
                Back
            </button>

        </>
    )
}
