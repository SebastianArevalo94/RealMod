import { useState } from "react";
import "../styles/Perfil.css";

const Perfil = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  console.log(user.img);
  return (
    <div className="d-flex flex-column mt-4">
      <p className="profile-name text-center">{user.name}</p>
      <div className="d-flex justify-content-center">
        <img className="profile-img mt-2" src={user.img} width="200px" alt="img"/>
      </div>
      <p className="text-center mt-4 profile-email">{user.email}</p>
    </div>
  );
};

export default Perfil;
