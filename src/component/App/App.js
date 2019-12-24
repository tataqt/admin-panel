import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from '../UserList/UserList';
import { PostList, PostEdit, PostCreate } from '../PostList/PostList';
import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App;
