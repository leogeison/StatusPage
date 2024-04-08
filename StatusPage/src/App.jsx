import { CheckCircle } from 'phosphor-react';
import styles from './App.module.css';
import { Header } from './Components/Header';
import { WhatsAppChart } from './Components/WhatsAppChart';
import { PizzaChart } from './Components/PizzaChart';
import './global.css';
import { ServicesChart } from './Components/ServicesChart';
import { ServiceActivityTime } from './Components/ServicesActivityTime';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.boxContent}>
        <div className={styles.headerContent}>
          <CheckCircle size={38} color="#4ad991" weight="fill" />

          <div className={styles.headerText}>
            <strong>Todo o serviço operacional</strong>
            <span>Último incidente 5 dias atrás</span>
          </div>
        </div>
      </div>
      <main>
        <section className={styles.charts}>
          <div id="whatsAppContainer">
            <WhatsAppChart />
          </div>

          <div className={styles.alignChart}>
            <div id="pizzaChart">
              <PizzaChart />
            </div>
            <ServicesChart />
          </div>

          <ServiceActivityTime />


        </section>
      </main>
    </div>
  );
}
