 
import { useEffect } from 'react';
import Highcharts from 'highcharts';
export function PizzaChart() {
  useEffect(() => {
    Highcharts.chart('pizzaChart', {
      chart: {
        type: 'pie', 
       
      },
      title: {
        text: 'Brasil',
        style: {
          fontSize: '18px'
        }
      },
      tooltip: {
        style: {
          fontSize: '12px'
        },
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      legend: {
        itemStyle: {
          fontSize: '10px' // Tamanho da fonte da legenda
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: true,
          colors: ['blue', 'green', 'red', 'yellow', 'purple'].map(color =>
            Highcharts.color(color).brighten(-0.2).get()
          )
        }
      },
      series: [
        {
          name: 'Porcentagem',
          colorByPoint: true,
          data: [
            {
              name: 'Recebimentos de Mensagens',
              y: 30,
              color: 'blue'
            },
            {
              name: 'Usuários Ativos',
              y: 29,
              color: 'green'
            },
            {
              name: 'Reclamações Registradas',
              y: 20,
              color: 'red'
            },
            {
              name: 'Solicitações Respondidas',
              y: 15,
              color: 'yellow'
            },
            {
              name: 'Outros',
              y: 6,
              color: 'purple'
            }
          ]
        }
      ]
    });
  }, []); // Executar apenas uma vez após a montagem do componente

} 
