import React, {useRef, useState} from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => {

  const [pageName, setPageName] = useState("Main page")

  const menuItems = [
    { text: "Main page", href: "/" },
    { text: "Tracks list", href: "/tracks" },
    { text: "Albums", href: "/albums" }
  ]

  const burgerMenu = useRef(null)
  const one = useRef(null)
  const two = useRef(null)
  const three = useRef(null)
  const sideBar = useRef(null)

  let isOpen = false;

  const handleBurgerClick = () => {

    if (isOpen) {
      burgerMenu.current.classList.add(styles.close)
      sideBar.current.classList.add(styles.close)

      setTimeout(() => {
        one.current.classList.remove(styles.opened)
        two.current.classList.remove(styles.opened)
        three.current.classList.remove(styles.opened)
        burgerMenu.current.classList.remove(styles.close)
        isOpen = false
      }, 700)
    } else {
      burgerMenu.current.classList.add(styles.open)
      sideBar.current.classList.remove(styles.close)

      setTimeout(() => {
        one.current.classList.add(styles.opened)
        two.current.classList.add(styles.opened)
        three.current.classList.add(styles.opened)
        burgerMenu.current.classList.remove(styles.open)
        isOpen = true
      }, 700)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.burgerMenu} ref={burgerMenu} onClick={() => handleBurgerClick()}>
          <div className={styles.one} ref={one}></div>
          <div className={styles.two} ref={two}></div>
          <div className={styles.three} ref={three}></div>
        </div>
        <div className={styles.pageName}>
          {pageName}
        </div>
      </div>
      <div className={styles.sideBar} ref={sideBar}>
        {
          menuItems.map(link => {
            return (
              <Link href={link.href} key={link.href}>
                <a className={styles.link} onClick={() => setPageName(link.text)}>{link.text}</a>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default Navbar;
