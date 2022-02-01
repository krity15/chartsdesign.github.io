let labels1 = ['YES', 'NO'];
let data1 = [88, 12];
let colors1 = ['#49A9EA', '#36CAAB'];

let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['YES', 'NO'],
        datasets: [ {
            data: [88, 12],
            backgroundColor: ['#2E8B57', '#4682B4']
        }]
    },
    options: {
        title: {
            text: "Do you like travelling?",
            display: true
        }
    }
});

let labels2 = ['Business', 'Biomedical Sciences', 'Journalism', 'Computer Science'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#FFA07A', '#F08080', '#34495E', '#008080'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Popular college majors based on NCES data",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Novak',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [50, 12, 55, 7, 29]
          },
          {
            label: 'Daniil',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Germany', 'France', 'Denmark', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union",
            display: true
        }
    }
});
let labels5 = ['Germany', 'France', 'Denmark', 'Italy', 'Spain', 'Others(23)'];
let data5 = [83, 67, 66, 61, 47, 187];
let colors5 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
    type: 'line',
    data: {
        labels: labels5,
        datasets: [ {
            data: data5,
            backgroundColor: colors5
        }]
    },
    options: {
        title: {
            text: "Population of the European Union using line chart",
            display: true
        }
    }
});

let labels6 = ['Business', 'Biomedical Sciences', 'Journalism', 'Computer Science'];
let data6 = [179.9, 190.3, 186.5, 130];
let colors6 = ['#FFA07A', '#F08080', '#34495E', '#008080'];

let myChart6 = document.getElementById("myChart6").getContext('2d');

let chart6 = new Chart(myChart6, {
    type: 'polarArea',
    data: {
        labels: labels6,
        datasets: [ {
            data: data6,
            backgroundColor: colors6
        }]
    },
    options: {
        title: {
            text: "Popular college majors based on NCES data in polar chart",
            display: true
        },
        legend: {
          display: false
        }
    }
});

let labels7 = ['Business', 'Biomedical Sciences', 'Journalism', 'Computer Science'];
let data7 = [179.9, 190.3, 186.5, 130];
let colors7 = ['#FFA07A', '#F08080', '#34495E', '#008080'];

let myChart7 = document.getElementById("myChart7").getContext('2d');

let chart7 = new Chart(myChart7, {
    type: 'bubble',
    data: {
        labels: labels7,
        datasets: [ {
            data: data7,
            backgroundColor: colors7
        }]
    },
    options: {
        title: {
            text: "Popular college majors based on NCES data in bubblechart",
            display: true
        },
        legend: {
          display: false
        }
    }
});

var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            // this dataset is drawn below
            order: 2
        }, {
            label: 'Line Dataset',
            data: [10, 10, 10, 10],
            type: 'line',
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: options
 });