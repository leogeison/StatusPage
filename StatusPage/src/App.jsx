
import styles from './App.module.css';
import { Header } from './Components/Header';
import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="header-content">
        
        <div className="header-text">
          <h3>Todo o serviço operacional</h3>
          <p>Último incidente 5 dias atrás</p>
        </div>
      </div>
    </div>
  );
}
