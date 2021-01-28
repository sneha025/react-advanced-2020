import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const reponse = await fetch(url);
    const users = await reponse.json();
    console.log(users);
    setUser(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">

        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
