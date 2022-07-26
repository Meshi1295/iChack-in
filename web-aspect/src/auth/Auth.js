import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { AppContext } from '../App';


const Auth = (props) => {
    const [redirect, setRedirect] = useState(null)
    const { setAccessToken } = useContext(AppContext);
    let navigate = useNavigate();
    useEffect(async () => {
        try {
            let response = await axios.get('http://localhost:5000/token', {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Auth response', response);
            setAccessToken(response.data)
            setRedirect(1);
        } catch (error) {
            navigate('/login')
        }
    }, [])

    return (
        redirect ? props.children : null
    );
}

export default Auth;