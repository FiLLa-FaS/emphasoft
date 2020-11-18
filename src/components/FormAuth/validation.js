import * as yup from 'yup'

const validation = yup.object().shape({
    username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно').min(4, 'У пароля должно быть минимум 4 символа')
})

export default validation