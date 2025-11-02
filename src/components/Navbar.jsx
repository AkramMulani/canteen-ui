import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/menu" className="text-xl font-semibold">CanteenK</Link>
<div className="space-x-4 flex items-center">
<Link to="/menu" className="hover:text-sky-600">Menu</Link>
<Link to="/cart" className="px-3 py-1 rounded-md border">Cart</Link>
</div>
</div>
</nav>
)
}