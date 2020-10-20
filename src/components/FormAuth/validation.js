import * as yup from 'yup'

const validation = yup.object().shape({
    username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно')
})

export default validation