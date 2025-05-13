import React from "react";
import styles from "./Header.module.scss";
import logo from "@/assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/auth/authSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className={styles.container__nav}>
        <ul className={styles.container__nav__list}>
          {isAuthenticated ? (
            <>
              <li className={styles.container__nav__list__item}>
                <FontAwesomeIcon icon={faUserCircle} />
                <Link to="/profile">{user.firstName}</Link>
              </li>
              <li className={styles.container__nav__list__item}>
                <FontAwesomeIcon icon={faSignOut} />
                <Link to="/signin" onClick={() => dispatch(logout())}>
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <li className={styles.container__nav__list__item}>
              <FontAwesomeIcon icon={faUserCircle} />
              <Link to="/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
