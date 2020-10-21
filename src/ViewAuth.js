import React, {useState} from 'react'
import styled from 'styled-components'
import {FormAuth} from './components'
import { NavLink } from 'react-router-dom'

const ViewAuth = () => {


    const [isSubmitting, setIsSubmitting] = useState(false);

    const showAuth = () => {
        if(isSubmitting) {
            return <p className="success-auth">
            Вы успешно авторизованы!
        </p>
        } else {
            return <FormAuth submitAuth={submitAuth}/>
        }
    }

    const submitAuth = () => {
        setIsSubmitting(true)
    }

    // const getUsers = (token) => {
    //     axios.get(
    //         'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/',
    //         { headers: { Authorization: `Bearer ${token}` } }
    //       )
    //   .then((response) => {
    //     console.log(response, 'response');
    //   })
    //   .catch((error) => {
    //     console.log(error, 'error');
    //   });
    //   }

    return  <Wrapper>
                {showAuth()}
                {isSubmitting && 
                    <p className="auth-link">
                        <NavLink to={"/users"}>Перейти на страницу пользователей</NavLink>
                    </p> }
            </Wrapper>
}

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px;

    .success-auth {
        text-align: center;
        font-size: 36px;
    }

    .auth-link {
        margin: 0;
        padding: 0;
        font-size: 18px;
        text-align: center;
        a {

            color:#c93030;
            transition: color 0.2s;

            &:hover {
                color: red;
            }
        }
        
}
`

export default ViewAuth