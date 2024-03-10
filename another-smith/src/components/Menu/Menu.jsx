import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div onClick={handleMenu}>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>Landing</li>
          <li>Projects</li>
          <li>Training</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
