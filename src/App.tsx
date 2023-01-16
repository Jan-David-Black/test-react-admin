import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList } from "./users";
import { PostList } from "./posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} recordRepresentation="name"/>
  </Admin>
);

export default App;
