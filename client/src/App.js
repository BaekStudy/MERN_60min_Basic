import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import User from "./components/User";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((res) => {
      setListOfUsers(res.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((res) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return <User user={user} />;
          //return <User name={user.name} age={user.age} username ={user.username}/>
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
