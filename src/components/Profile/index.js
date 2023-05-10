import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import './index.css'

const Profile = () => {
    const data = JSON.parse(localStorage.getItem('user_data'))
    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove("key")
        navigate("/")
    }
    return (
        <div className='profile-bg-container'>
            <div className='profile-container'>
                <img className='image' src="https://res.cloudinary.com/dhfmjj1j9/image/upload/v1683647816/My_New_Photo_u3hjhs.jpg" alt='' />
                <div className='profile'>
                    <h1 className='name'>{data.fullName}</h1>
                    <p className='email'>{data.email}</p>
                </div>
            </div>
            <p className='desc'>Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            <button type='button' className='logout-btn' onClick={onClickLogout}>Logout</button>
        </div>
    )
}

export default Profile