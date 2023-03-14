import React from "react";
import styles from "./sidebar.module.css";
// import Link from "next/link";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

const SideBar = ({ animals }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className={styles.sidebar}>
      <h3>Your new gang</h3>
      <ul>
        {animals.map((animal) => {
          return (
            <li className={styles.animal} key={animal.name}>
              <Link
                activeClass={styles.active}
                to={`${animal.name.replace(/\s/g, "")}`}
                spy={true}
                smooth={true}
                duration={0}
                offset={-40}
              >
                {animal.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
