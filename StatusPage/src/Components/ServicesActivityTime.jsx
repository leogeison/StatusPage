

import React from 'react';
import styles from './ServicesActivityTime.module.css';

export function ServiceActivityTime() {
  const barsData = [
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'yellow', tooltip: 'Incidente Energético' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'red', tooltip: 'WhatsApp Interrompido' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' },
    { color: 'yellow', tooltip: 'Incidente Energético' },
    { color: 'red', tooltip: 'WhatsApp Interrompido' },
    { color: 'red', tooltip: 'WhatsApp Interrompido' },
    { color: 'green' },
    { color: 'yellow', tooltip: 'Incidente Energético' },
    { color: 'yellow', tooltip: 'Incidente Energético' },
    { color: 'green' },
    { color: 'green' },
    { color: 'green' }
  ];

  return (
    <div className={styles.servicesActivityTime}>
      <h1>Tempo de Atividades dos Serviços</h1>
      <div className={styles.bars}>
        {barsData.map((bar, index) => (
          <div
            key={index}
            className={`${styles.bar} ${
              styles[
                `bar${bar.color.charAt(0).toUpperCase() + bar.color.slice(1)}`
              ]
            }`}
          >
            {bar.tooltip && (
              <span className={styles.tooltip}>{bar.tooltip}</span>
            )}
          </div>
        ))}
      </div>
      <span>90 dias atrás</span>
    </div>
  );
}
