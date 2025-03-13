import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const token = localStorage.getItem("token")

    const user = useMemo(() => {
        if (token) {
            return JSON.parse(atob(token.split('.')[1]))
        }
    }, [token])

    console.log(user);


    return (
        <div className='bg-blue-500 text-white w-full py-4 mb-12'>
            <div className="max-w-4xl mx-auto flex items-center justify-between px-2">
                <div className='flex items-center gap-4'>
                    <Link to="/">Posts</Link>
                    <Link to="/new">New Post</Link>
                </div>
                <div className='flex items-center gap-4'>
                    {token ? (
                        <>
                            Welcome, {user?.sub}
                        </>
                    ) : (
                        <Link to="/login" className='text-white'>Login</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header