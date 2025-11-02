import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Menu from './routes/Menu'
import ItemDetails from './routes/ItemDetails'
import CartPayment from './routes/CartPayment'
import OrderTracking from './routes/OrderTracking'
import Navbar from './components/Navbar'


export default function App(){
    const [menu, setMenu] = useState([
        {id:1, name:'Veg Thali', price:120, type:'Veg', desc:'A wholesome plate with dal, sabzi, roti, rice and salad.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzK_7hGPMVE_l3Gfgmlu_GRSzsmK76ul9w&s'},
        {id:2, name:'Masala Dosa', price:60, type:'Veg', desc:'Crispy dosa filled with spicy potato masala served with chutney and sambar.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s'},
        {id:3, name:'Chicken Biryani', price:180, type:'Non-Veg', desc:'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s'},
        {id:4, name:'Paneer Butter Masala', price:150, type:'Veg', desc:'Cottage cheese cubes in a rich and creamy tomato-based gravy.', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x500.jpg'},
        {id:5, name:'Fish Curry', price:200, type:'Non-Veg', desc:'Fresh fish cooked in a tangy and spicy curry sauce.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIWqCsicGYoNN39SB86aLdYBgFVoNIW-Swg&s'},
        {id:6, name:'Chole Bhature', price:80, type:'Veg', desc:'Spicy chickpea curry served with deep-fried bread.', image: 'https://img.freepik.com/free-photo/chole-bhature-delicious-indian-street-food_23-2151998582.jpg?semt=ais_hybrid&w=740&q=80'},
        {id:7, name:'Mutton Rogan Josh', price:220, type:'Non-Veg', desc:'Tender mutton pieces cooked in a flavorful yogurt-based gravy.', image: 'https://t4.ftcdn.net/jpg/08/00/27/21/360_F_800272123_TGneDBDEdnQ2ct5cfMLmkFjr4z4uljym.jpg'},
        {id:8, name:'Veg Pulao', price:100, type:'Veg', desc:'Aromatic basmati rice cooked with mixed vegetables and spices.', image: 'https://media.istockphoto.com/id/1146289003/photo/traditional-indian-street-food-rice-with-vegetables-close-up-on-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=Ikb_QsWs1yjKMs8izmdkAjUc2BAiBQCLOzL9uWZ7-aY='},
    ])
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-6xl mx-auto p-6">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/menu" element={<Menu menu={menu} />} />
                    <Route path="/item/:id" element={<ItemDetails menu={menu} />} />
                    <Route path="/cart" element={<CartPayment />} />
                    <Route path="/track/:orderId" element={<OrderTracking />} />
                </Routes>
            </main>
        </div>
    )
}
