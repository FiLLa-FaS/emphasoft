import React, {useState} from 'react'
import styled from 'styled-components'
import {FormAuth} from './components'
import Cookies from 'js-cookie'

const ViewAuth = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const axios = require('axios').default;
    const token = Cookies.get('token')

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

    const getUsers = (token) => {
        axios.get(
            'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/',
            { headers: { Authorization: `Bearer ${token}` } }
          )
      .then((response) => {
        console.log(response, 'response');
      })
      .catch((error) => {
        console.log(error, 'error');
      });
      }



    return <Wrapper>
    {showAuth()}
    {isSubmitting && getUsers(token)}
    </Wrapper>
}

const Wrapper = styled.div`
.success-auth {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
`

export default ViewAuth