import React, { useState, useEffect } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { sortBy, debounce } from "lodash";
import { ListUsers, Input } from "./components";
import Cookies from "js-cookie";

const token = Cookies.get("token");

async function fetchUsers() {
  const response = await fetch(
    "https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",
    { headers: { Authorization: `Token ${token}` } }
  );

  return await response.json();
}

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getUsers() {
      const response = await fetchUsers();
      setUsers(response);
    }
    getUsers();
  }, []);

  const handleChange = (event) => {
    event.persist();

    const dbChange = debounce(() => {
      setSearchTerm(event.target.value);
    }, 500);

    dbChange();
  };

  const renderUsers = () => {
    const actualUsers = sortBy(
      (users.filter((user) => user.username.toLowerCase().includes(searchTerm))),
      "id"
    );

    if (actualUsers.length > 0) {
      return <ListUsers title="Все пользователи" users={actualUsers} />;
    }

    return <ErrorMessage>Результатов не найдено</ErrorMessage>;
  };

  return (
    <Wrapper>
      <Input placeholder="Введите текст" onChange={handleChange} />
      {renderUsers()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  ${breakpoint("xs", "md")`
          padding: 10px 0;  
        `}
`;
const ErrorMessage = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  color: #c93030;
  margin: 0;

  ${breakpoint("xs", "md")`
    font-size: 16px;
  `}
`;

export default ViewUsers;

// const USERS = [
//     {
//         id: 254,
//         first_name: 'John',
//         last_name: 'Doe',
//         username: 'Hotdog',
//         password: '1234abcd',
//         is_active: false,
//         is_superuser: false
//     },
//     {
//         id: 8,
//         first_name: 'Sarah',
//         last_name: 'Hopkins',
//         username: 'Unicorn',
//         password: '4321dcba',
//         is_active: false,
//         is_superuser: false
//     },
//     {
//         id: 3046,
//         first_name: 'Henry',
//         last_name: 'McMillan',
//         username: 'Henry2012',
//         password: '5678efgh',
//         is_active: false,
//         is_superuser: false
//     },
//     {
//         id: 200,
//         first_name: 'Diana',
//         last_name: 'Smith',
//         username: 'test-user',
//         password: '8765',
//         is_active: false,
//         is_superuser: false
//     },
//     {
//         id: 684,
//         first_name: 'Perry',
//         last_name: 'Johnson',
//         username: '16DirtyFlower16',
//         password: 'sandwich',
//         is_active: false,
//         is_superuser: false
//     },
// ]
