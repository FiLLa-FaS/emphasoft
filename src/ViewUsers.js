import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { sortBy, debounce } from 'lodash'
import {ListUsers, Input} from './components'
// import Cookies from 'js-cookie'

const ViewUsers = () => {

    const USERS = [
        {
            id: 254,
            first_name: 'John',
            last_name: 'Doe',
            username: 'Hotdog',
            password: '1234abcd',
            is_active: false,
            is_superuser: false
        },
        {
            id: 8,
            first_name: 'Sarah',
            last_name: 'Hopkins',
            username: 'Unicorn',
            password: '4321dcba',
            is_active: false,
            is_superuser: false
        },
        {
            id: 3046,
            first_name: 'Henry',
            last_name: 'McMillan',
            username: 'Henry2012',
            password: '5678efgh',
            is_active: false,
            is_superuser: false
        },
        {
            id: 200,
            first_name: 'Diana',
            last_name: 'Smith',
            username: 'test-user',
            password: '8765',
            is_active: false,
            is_superuser: false
        },
        {
            id: 684,
            first_name: 'Perry',
            last_name: 'Johnson',
            username: '16DirtyFlower16',
            password: 'sandwich',
            is_active: false,
            is_superuser: false
        },
    ]

    const currentUsers = USERS
    const sortedUsers = sortBy(currentUsers, 'id')


    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

      useEffect(
        debounce(() => {
          if (searchTerm) {
            const results = sortedUsers.filter((user) =>
              user.username.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
          }
        }, 2000),
        [searchTerm]
      );

      const showSearchResults = (searchResults) => {
        if (searchTerm) {
          if (searchResults.length > 0) {
            return <ListUsers title="Найденные результаты" users={searchResults} />;
          } else return <ErrorMessage>Результатов не найдено</ErrorMessage>;
        } else
          return (
            <ErrorMessage>Введите символ или слово в поле поиска</ErrorMessage>
          );
      };

        // const axios = require('axios').default;
        // const token = Cookies.get('token')
    //     const getUsers = (token) => {
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

      const showUsers = () => {
          return <ListUsers title="Все пользователи" users={sortedUsers}/>
      }

    
    return <Wrapper>
    <Input
        value={searchTerm}
        placeholder="Введите текст"
        onChange={handleChange}
      />
        {showSearchResults(searchResults)}
      {showUsers()}
    </Wrapper>
}

const Wrapper = styled.div`
padding: 30px;
`
const ErrorMessage = styled.p`
font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #c93030;
  margin: 0;
`;

export default ViewUsers