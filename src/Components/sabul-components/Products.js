import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {
  return (
    <>
    <div>
        <input type="seach" placeholder='Search Product'></input>
    </div>
    <nav>
        <Link to='FeaturedProducts'>Features</Link>
        <Link to='NewProducts'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
