import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import articles from '../../data/articles'; // Импортируем данные

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Добавляем счетчик рядом с заголовком */}
        <h1 className={styles.title}>React Blog <span style={{fontSize: '0.8rem', opacity: 0.8}}>({articles.length})</span></h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;