Highcharts.chart('whasAppChart', {
  chart: {
    type: 'spline',
    
    
  },
  title: {
    text: 'WhatsApp Últimas 24 Horas',
    style: {
      fontSize: '14px'
    }
  },
  xAxis: {
    categories: [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00'
    ]
  },
  yAxis: {
    title: {
      text: 'Notificações',
      style: {
        fontSize: '14px'
      }
    }
  },
  tooltip: {
    style: {
      fontSize: '10px'
    }
  },
  series: [
    {
      name: 'Brasil',
      color: 'green',
      data: [
        15, 10, 8, 25, 21, 20, 18, 4, 6, 30, 28, 35, 62, 60, 48, 45, 32, 50, 68,
        45, 32, 60, 28, 25
      ]
    },
    {
      name: 'México',
      color: 'purple',
      data: [
        3, 8, 6, 12, 10, 42, 24, 19, 35, 38, 25, 32, 40, 40, 35, 42, 40, 48, 45,
        52, 50, 42, 38, 22
      ]
    }
  ]
});

//Grafico de Pizza
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
  series: [{
      name: 'Porcentagem',
      colorByPoint: true,
      data: [{
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
  }]
});

  
  

  
