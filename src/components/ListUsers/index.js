import React from 'react'
import styled from 'styled-components'

const ListUsers = ({users, title}) => {
    return <Wrapper>
    <h2 className="title">{title}</h2>
        {users.map(user => (
                    <li key={user.id} className="user-item">
                        <h2 className="user-item__title">{user.first_name} {user.last_name}</h2>
                        <p className="user-item__id">ID - {user.id}</p>
                        <p className="user-item__username">Логин - {user.username}</p>
                    </li>
                ))}
    </Wrapper>
}

const Wrapper = styled.ul`
font-family: Arial, Helvetica, sans-serif;
list-style: none;
padding: 0;

.title {
    text-align: center;
  font-weight: 900;
  font-size: 36px;
}

.user-item {
margin-top: 20px;

&:first-of-type {
    margin-top: 0;
}

    &__title {
        margin: 0;
        padding: 0;
        font-size: 36px;
        font-weight: 700;
    }

    &__id {
        padding: 0;
        margin: 15px 0 0 0;
        font-size: 24px;
    }

    &__username {
        padding: 0;
        margin: 15px 0 0 0;
        font-size: 28px;
        font-style: italic;
    }
}
`

export default ListUsers