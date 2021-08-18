import React, {useState} from 'react'
import styles from "./Login.module.scss";

import { encryptMessage } from '../../utils/cipher';


const Login = ({ users, setLogged }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const matchedUser = users.filter((user) => {
      if (
        user.name.toLowerCase() === username.toLowerCase() &&
        user.password === password
      )
        return true;
      else return false;
    })[0];

    if (matchedUser) {
        let LOGIN_USER_KEY = encryptMessage(`chromaticabberations_${matchedUser.id}`)
        localStorage.setItem("LOGIN_USER_KEY", LOGIN_USER_KEY);
        alert("You've transcended");
        setLogged(true);
    } else setError("Invalid Email OR Password");
};

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.formContainer}>
        {error ? <div className={styles.error}>{error}</div> : ""}
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <button onClick={submitHandler} className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;