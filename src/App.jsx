import { CheckCircle, Info, Eye } from 'phosphor-react';
import styles from './App.module.css';
import { Header } from './Components/Header/Header';
import { WhatsAppChart } from './Components/WhatsAppChart/WhatsAppChart';
import { PizzaChart } from './Components/PizzaChart/PizzaChart';
import './global.css';
import { ServicesChart } from './Components/ServiceChart/ServicesChart';
import { ServiceActivityTime } from './Components/ServicesActivityTime/ServicesActivityTime';

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
          <div className={styles.whatsappChartBox} id="whatsAppContainer">
            <WhatsAppChart />
          </div>

          <div className={styles.alignChart}>
            <div className={styles.pizzaChartBox} id="pizzaChart">
              <PizzaChart />
            </div>
            <ServicesChart />
          </div>
          <ServiceActivityTime />
        </section>
        <div className={styles.incidentsTitle}>
          <p>Últimos Incidentes</p>
        </div>
        <section>
          <div className={styles.incidents}>
            <div className={styles.containerIncidents}>
              <h2>02 de Agosto 2020</h2>
              <div className={styles.contentIncidents}>
                <CheckCircle size={25} color="#4ad991" />
                <div className={styles.contentText}>
                  <strong>Solução</strong>
                  <p>
                    Gerador atenderá como backup em casos semelhantes,
                    garantindo assim, a continuidade por períodos maiores que 23
                    horas.
                  </p>
                  <span>4 horas atrás </span>
                </div>
              </div>

              <div className={styles.contentIncidents}>
                <Eye size={25} color="#81c9ff" />
                <div className={styles.contentText}>
                  <strong>Problema sendo monitorado</strong>
                  <p>
                    Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL.
                  </p>
                  <span>8 horas atrás </span>
                </div>
              </div>

              <div className={styles.contentIncidents}>
                <Info size={25} color="#ffca0d" weight="duotone" />
                <div className={styles.contentText}>
                  <strong>Incidente Energético</strong>
                  <p>
                    Devido a incidentes naturais houvera a presença da falta de
                    energia na região por tempo não previsto, fazendo com que
                    hajam paradas do fornecimento de energia de forma segura, o
                    que faz com que a cada período de 23horas seja obrigatório o
                    reinício das atividades dos serviços prestados. Isto ocorre
                    diante ao fato de que o gerador disponibilizado pela
                    ALERTRACK possui coeficiência de até 20 Horas de
                    disponibilidade do fornecimento contínuo, somados à
                    disponibilização por parte de armazenamento de energia,
                    menos o tempo necessário para o desligamento dos servidores
                  </p>
                  <span>10 horas atrás </span>
                </div>
              </div>
            </div>

            <div className={styles.containerIncidents}>
              <h2>31 de Julho 2020</h2>
              <div className={styles.contentIncidents}>
                <CheckCircle size={25} color="#4ad991" />
                <div className={styles.contentText}>
                  <strong>Solução</strong>
                  <p>WhatsApp voltou a operar normalmente</p>
                  <span>4 horas atrás </span>
                </div>
              </div>

              <div className={styles.contentIncidents}>
                <Eye size={25} color="#81c9ff" />
                <div className={styles.contentText}>
                  <strong>Problema sendo monitorado</strong>
                  <p>O serviço está sendo restaurado para alguns países.</p>
                  <span>8 horas atrás </span>
                </div>
              </div>

              <div className={styles.contentIncidents}>
                <Info size={25} color="#ffca0d" weight="duotone" />
                <div className={styles.contentText}>
                  <strong>WhatsApp Interrompido</strong>
                  <p>
                    O WhatsApp está passando por uma interrupção geral em todo o
                    mundo. Não é possível usar o serviço porque o servidor está
                    fora do ar.
                  </p>
                  <span>10 horas atrás </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
