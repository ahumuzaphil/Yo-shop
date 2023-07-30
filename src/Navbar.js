import react from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
//import Cart from './cart'

export default function Nav(){
    return(
        <div className='nav'>
            <div className='nav-content'>
                <Link to="/">
            <h2 className='sub1'><span className='sub'>Dev</span>Store</h2>
            </Link>
            <Link to="cart">
            <h4 className='bas'>shop<span><ShoppingCartOutlined /></span></h4>
            </Link>
            </div>
        </div>
    )
}