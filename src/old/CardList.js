import React, {useEffect, useState} from "react";
import "./CardList.css";
import CardUser from "./CardUser";
import axios from 'axios';
import { Link } from "react-router-dom";

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    axios("https://jsonplaceholder.typicode.com/users").then(res => 
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h1>CardList</h1>
      <div className="Cards-List">
      {users.map((user) => {
          return (
            <div key={user.id}> 
              <Link to={`/user/detail/${user.id}`}>
                <CardUser data={user}/>
              </Link>
            </div>
          )
      })}
      </div>
    </div>
  )
}

export default CardList;