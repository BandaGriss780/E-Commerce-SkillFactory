import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { AllProductsPage } from '../pages/AllProductsPage'
import { CartPage } from '../pages/CartPage'

import { HomePage } from '../pages/HomePage'
import { UserPage } from '../pages/UserPage'



export const CartRoutes = () => {


  return (
    <>


      <NavBar />


      <div className="container">


        <Routes>


          <Route path='/*' element={<HomePage />} />


          <Route path='/user' element={<UserPage />} />

          <Route path='/cart' element={<CartPage />} />

          <Route path='/products' element={<AllProductsPage />} />





        </Routes>


      </div>
    </>
  )
}
