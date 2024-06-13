import styles from "./Header.module.css";

function Header(props: { pokemon: string }) {
  return (
    <header className={styles.header}>
      <h1>{props.pokemon}</h1>
    </header>
  );
}

export default Header;
