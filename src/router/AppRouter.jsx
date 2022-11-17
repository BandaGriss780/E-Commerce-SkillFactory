import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '../auth/components/CheckingAuth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CartRoutes } from '../Cart/routes/CartRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'

export const AppRouter = () => {

  const { status } = useCheckAuth();


  if (status === 'checking') return <CheckingAuth />

  return (
    <>
      <Routes>
        {
          status === 'authenticated'
            ? <Route path='/*' element={<CartRoutes />} />
            : <Route path='/auth/*' element={<AuthRoutes />} />
        }

        <Route path='/*' element={<Navigate to='/auth/login' />} />

      </Routes>
    </>
  )
}


