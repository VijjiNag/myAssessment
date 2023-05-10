import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
    const token = Cookies.get('key')
    console.log(token)
    if (token !== undefined) {
        return <Navigate to="/profile"/>
    }
    return (
    <div className='bg-container'>
        <h1 className='main-head'>Welcome to PopX</h1>
        <p className='main-desc'>Lorem ipsum dolor sit amet, consectetur adipiscingelit,</p>
        <Link className='link' to="/register">
            <button className='create-account-btn'>Create Account</button>
        </Link>
        <Link className='link' to="/login">
            <button className='login-btn'>Already Registered? Login</button>
        </Link>
    </div>
    )
}

export default Home