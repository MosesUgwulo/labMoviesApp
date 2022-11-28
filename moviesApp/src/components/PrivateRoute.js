import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute( {children} ) {

    const Navigate = useNavigate()

    const { currentUser } = useAuth()

        useEffect(() => {
            if (!currentUser) {
                Navigate('/login', { replace: true })
            }
        }, [currentUser, Navigate])

    return children

    
}
