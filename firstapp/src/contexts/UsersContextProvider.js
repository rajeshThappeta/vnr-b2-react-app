import { useEffect, useState } from "react";
import { usersContext } from "./usersContext";

function UsersContextProvider({ children }) {
  //state
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersList) => setUsers(usersList));
  }, []);

  return (
    <usersContext.Provider value={[users, setUsers]}>
      {children}
    </usersContext.Provider>
  );
}

export default UsersContextProvider;
