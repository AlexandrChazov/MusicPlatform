import React from 'react';
import styles from "../styles/Index.module.scss";
import Navbar from "../components/Navbar"; // файл со стилями имеет тоже название что и компонента

const Index = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.wrapper}>
        <h1>Welcome</h1>
        <h3>Here you can find the best tracks</h3>
      </div>
    </div>
  );
};

export default Index;
