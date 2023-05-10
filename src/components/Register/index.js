import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Register extends Component {
    state = {
        selected: true,
        fullName: '',
        phone: '',
        email: '',
        password: '',
        companyName: '',
        successMsg: '',
        isEmptyFields : '',
        areYouAgency : ''
    }

    onChangeRadio = (event) => {
        this.setState(prevState => ({
            selected: !prevState.selected,
            areYouAgency : event.target.value
        }))
    }

    onChangeName = event => {
        this.setState({ fullName: event.target.value })
    }

    onChangePhoneNumber = event => {
        this.setState({ phone: event.target.value })
    }

    onChangeEmail = event => {
        this.setState({ email: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    onChangeCompanyName = event => {
        this.setState({ companyName: event.target.value })
    }

    onSubmitForm = event => {
        event.preventDefault()
    }

    onClickCreateAccount = () => {
        const { fullName, phone, email, password, companyName, areYouAgency } = this.state
        if ((fullName === '') || (phone === '') || (email === '') || (password === '') || (companyName === '')) {
            this.setState({successMsg: "Please fill all fields", isEmptyFields : true})
        } else if ((fullName !== '') && (phone !== '') && (email !== '') && (password !== '') && (companyName !== '')) {
            this.setState({ fullName, phone, email, password, companyName, areYouAgency, successMsg: "You have successfully registered", isEmptyFields : false })
            const userDetails = { fullName, email, password, key : "SECRET_KEY" }
            localStorage.setItem('user_data', JSON.stringify(userDetails))
        }

        this.setState({
            fullName : '',
            phone : '',
            email : '',
            password : '',
            companyName : ''
        })
    }

    render() {
        const { selected, fullName, phone, email, password, companyName, isEmptyFields, successMsg, areYouAgency } = this.state
        return (
            <div className='reg-container'>
                <div className='form'>
                    <h1 className='reg-head'>Create your PopX account</h1>
                    <form className='form-container' onSubmit={this.onSubmitForm}>
                        <label htmlFor='fullName' className='label'>Full Name</label>
                        <input value={fullName} id='fullName' className='input' type='text' placeholder='Full Name' onChange={this.onChangeName} />
                        <label htmlFor='phoneNumber' className='label'>Phone Number</label>
                        <input value={phone} id='phoneNumber' className='input' type='number' placeholder='Phone Number' onChange={this.onChangePhoneNumber} />
                        <label htmlFor='emailAddress' className='label'>Email Address</label>
                        <input value={email} id='emailAddress' className='input' type='email' placeholder='Email Address' onChange={this.onChangeEmail} />
                        <label htmlFor='password' className='label'>Password</label>
                        <input value={password} id='password' className='input' type='password' placeholder='Password' onChange={this.onChangePassword} />
                        <label htmlFor='companyName' className='label'>Company Name</label>
                        <input value={companyName} id='companyName' className='input' type='text' placeholder='Company Name' onChange={this.onChangeCompanyName} />
                        <p className='reg-desc'>Are you an Agency?</p>
                        <div className='radio-container'>
                            <input id='yes' value={areYouAgency} name='agency' className='radio' type='radio' checked={selected === true} onChange={this.onChangeRadio} />
                            <label htmlFor='yes' className='radio-label'>Yes</label>
                            <input id='no' value={areYouAgency} name='agency' className='radio' type='radio' onChange={this.onChangeRadio} />
                            <label htmlFor='no' className='radio-label'>No</label>
                        </div>
                        <div className='btn-container'>
                            <button type='submit' className='create-account-btn' onClick={this.onClickCreateAccount}>
                                Create Account
                            </button>
                            <Link to="/">
                                <button className='home-btn'>
                                    Go to home page
                                </button>
                            </Link>
                        </div>
                        <p className={isEmptyFields ? 'error-msg' : 'success-msg'}>{successMsg}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register