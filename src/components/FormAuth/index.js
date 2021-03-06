import React from 'react'
import styled from 'styled-components'
import {Formik} from 'formik'
import Cookies from 'js-cookie'
import fields from './fields'
import validation from './validation'

const FormAuth = ({submitAuth}) => {
    
    const authorizeUser = (values) => {

        fetch('https://emphasoft-test-assignment.herokuapp.com/api-token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify({username: values.username, password: values.password})
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(results => {
            Cookies.set('token', results.token);
        submitAuth();
        })
    }

    return (
        <Wrapper>
            <Formik
                initialValues={fields}
                validationSchema={validation}
                validateOnBlur
                onSubmit={(values) => {authorizeUser(values)}}
                >{({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div className="form">
                        <p>
                            <label htmlFor="username">Логин</label>
                            <input className="input" type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                        </p>
                        {touched.username && errors.username && <p className="error">{errors.username}</p>}
                        <p>
                            <label htmlFor="password">Пароль</label>
                            <input className="input" type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                        </p>
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}
                        <button disabled={!isValid && !dirty} onClick={handleSubmit} type="submit">Отправить</button>
                    </div>
            )}</Formik>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.form {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 400px;
    padding: 24px;
    margin: 10px auto 0;
    border: solid 1px #eee;
    border-radius: 24px;
}

.input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.5em;
    border-radius: 4px;
    border: solid 1px #eee;
    padding: 4px 6px;
}

.error {
    color: red;
    font-weight: 700;
    font-size: 12px;
}
`

export default FormAuth