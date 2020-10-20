import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

const App = () => {
const validationSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно')
})

    return <Wrapper>
        <Formik
        initialValues={{
            login: '',
            password: ''
        }}
        validateOnBlur
        onSubmit={(values) => {console.log(values)}}
        validationSchema={validationSchema}
        >{({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <div className="form">
                <p>
                <label htmlFor="login">Логин</label>
                    <input className="input" type="text" name="login" onChange={handleChange} onBlur={handleBlur} value={values.login}/>
                </p>
                {touched.login && errors.login && <p className="error">{errors.login}</p>}
                <p>
                <label htmlFor="password">Пароль</label>
                    <input className="input" type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                </p>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <button disabled={!isValid && !dirty} onClick={handleSubmit} type="submit">Отправить</button>
            </div>
        )}</Formik>
    </Wrapper>
}

const Wrapper = styled.div`

.form {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    width: 400px;
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

export default App