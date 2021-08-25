import React from "react";

import { BiLogOut } from "react-icons/bi";

import styles from "./navbar.module.scss";

import { Button, buttonTypes } from "../button/Button";

const Navbar = ({ setLogged }) => {
  const logout = () => {
    localStorage.removeItem("LOGIN_USER_KEY");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <nav>
        <h1 className={styles.navBrand}>ADMIN</h1>
        <Button
          STYLES={styles.logoutBtn}
          type={buttonTypes.SM}
          clickHandler={logout}
        >
          Logout&nbsp;&nbsp;<BiLogOut />
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
