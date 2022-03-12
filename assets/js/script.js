
function counterTime() {
    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        console.log(counter);
        document.getElementById("txtTime").value = counter;
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
        console.log("Acabou");
    }, 10000);

    return interval;


}

let btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click", e => {
    console.log("clicou");
    counterTime();

});









let stsBtn = document.getElementById("btnStop");
let lastState;
var cnt0 = 0;
var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;
var cnt4 = 0;
var cnt5 = 0;
function toogleBtn() {
    if (lastState == "start") {
        stsBtn.innerText = "Stop";
        stsBtn.style.backgroundColor = "red";
        cnt0++;


        var x = (new Date()).getTime();
        var y = parseFloat(Math.random() * 101).toFixed(1);;
        y = parseFloat(y)
        console.log(x, y);
        //console.log(this.responseText);
        if (myChart.series[0].data.length > 40) {
            myChart.series[0].addPoint([x, y], true, true, true);
        } else {
            myChart.series[0].addPoint([x, y], true, false, true);
        }

        document.getElementById("txtTime").value = cnt0;
        console.log(cnt0);
        lastState = "stop";

    } else {
        stsBtn.innerText = "Start";
        stsBtn.style.backgroundColor = "green";
        lastState = "start";
    }

    return lastState;
}


stsBtn.addEventListener("click", e => {

    console.log("clicou", toogleBtn());

});


setInterval(() => {
    console.log("interval");
    toogleBtn();
}, 3000);






var myChart = new Highcharts.Chart({
    chart: { renderTo: 'chart-temperature' },
    title: { text: 'Temperatura' },
    series: [{
        showInLegend: true,
        data: []
    }],
    plotOptions: {
        line: {
            animation: false,
            dataLabels: { enabled: true }
        },
        series: { color: '#059e8a' }
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
        title: { text: 'Temperatura (Celsius)' }
        //title: { text: 'Temperature (Fahrenheit)' }
    },
    credits: { enabled: false }
});


//Gráfico Rosca 01 
chart = getElementById("doughnut") 
//Config 
const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };



  //SETUP

  const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS),
    }
  ]
};



//Actions

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
        });
        chart.update();
      }
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const data = chart.data;
        const newDataset = {
          label: 'Dataset ' + (data.datasets.length + 1),
          backgroundColor: [],
          data: [],
        };
  
        for (let i = 0; i < data.labels.length; i++) {
          newDataset.data.push(Utils.numbers({count: 1, min: 0, max: 100}));
  
          const colorIndex = i % Object.keys(Utils.CHART_COLORS).length;
          newDataset.backgroundColor.push(Object.values(Utils.CHART_COLORS)[colorIndex]);
        }
  
        chart.data.datasets.push(newDataset);
        chart.update();
      }
    },
    {
      name: 'Add Data',
      handler(chart) {
        const data = chart.data;
        if (data.datasets.length > 0) {
          data.labels.push('data #' + (data.labels.length + 1));
  
          for (let index = 0; index < data.datasets.length; ++index) {
            data.datasets[index].data.push(Utils.rand(0, 100));
          }
  
          chart.update();
        }
      }
    },
    {
      name: 'Hide(0)',
      handler(chart) {
        chart.hide(0);
      }
    },
    {
      name: 'Show(0)',
      handler(chart) {
        chart.show(0);
      }
    },
    {
      name: 'Hide (0, 1)',
      handler(chart) {
        chart.hide(0, 1);
      }
    },
    {
      name: 'Show (0, 1)',
      handler(chart) {
        chart.show(0, 1);
      }
    },
    {
      name: 'Remove Dataset',
      handler(chart) {
        chart.data.datasets.pop();
        chart.update();
      }
    },
    {
      name: 'Remove Data',
      handler(chart) {
        chart.data.labels.splice(-1, 1); // remove the label first
  
        chart.data.datasets.forEach(dataset => {
          dataset.data.pop();
        });
  
        chart.update();
      }
    }
  ];