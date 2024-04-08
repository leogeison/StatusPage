import { CheckCircle, Info, Gear } from 'phosphor-react';
import styles from './ServicesChart.module.css';

export function ServicesChart() {
  return (
    <div className={styles.servicesChart}>
      <h1>Serviços</h1>
      <div className={styles.serviceInfo}>
        <p>SacDigital</p>
        <CheckCircle size={25} color="#4ad991" weight="duotone" />
        <span className={styles.tooltip}>Operando</span>
      </div>
      <div className={styles.serviceInfo}>
        <p>Panfleto.Online</p>
        <CheckCircle size={25} color="#4ad991" weight="duotone" />
        <span className={styles.tooltip}>Operando</span>
      </div>
      <div className={styles.serviceInfo}>
        <p>SMSIdeal</p>
        <Gear size={25} color="#ea2a5a" weight="duotone" />
        <span className={styles.tooltip}>Em Manutenção</span>
      </div>
      <div className={styles.serviceInfo}>
        <p>ConsultaIdeal</p>
        <Info size={25} color="#ffca0d" weight="duotone" />
        <span className={styles.tooltip}>Oscilando</span>
      </div>
      <div className={styles.serviceInfo}>
        <p>Whattsap</p>
        <CheckCircle size={25} color="#4ad991" weight="duotone" />
        <span className={styles.tooltip}>Operando</span>
      </div>
      <div className={styles.serviceInfo}>
        <p>WhattsApp Bussiness API</p>
        <CheckCircle size={25} color="#4ad991" weight="duotone" />
        <span className={styles.tooltip}>Operando</span>
      </div>
    </div>
  );
}
