import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
const LoginButton = props => {
    const { email, password } = props
    const navigate = useNavigate()
    const onClickLogin = () => {
        const data = JSON.parse(localStorage.getItem('user_data'))
        if ((email !== '') && (password !== '')) {
            Cookies.set('key', data.key, { expires: 30 })
            navigate("/profile")
        }
    }
    return (
        <div className='btn-container'>
            <button type='submit' className='create-account-btn' onClick={onClickLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginButton