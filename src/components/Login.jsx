import React from 'react'
import { login } from '../api';

function Login() {
    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })

    async function handleLogin(e) {
        e.preventDefault()
        console.log(userData);

        if (userData.email.length === 0 || userData.password.length === 0) {
            alert("All fields are required")
            return
        }

        try {
            const response = await login(userData)
            if (response && response.accessToken) {
                window.location.href = "/"
            } else {
                alert("Invalid credentials")
            }
        } catch (error) {
            console.log(error);
        }
        // reset form
        setUserData({
            email: "",
            password: ""
        })
    }

    return (
        <div>

            <h3 className='text-lg font-medium mb-4'>Login</h3>

            <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    id=""
                    placeholder='Email'
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className='border border-gray-300 rounded-sm px-4 py-2'
                />
                <input
                    type="password"
                    name="password"
                    id=""
                    placeholder='Password'
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    className='border border-gray-300 rounded-sm px-4 py-2'
                />
                <button
                    type="submit"
                    className='bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login