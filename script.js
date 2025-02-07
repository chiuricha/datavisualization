const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Michael Jordan', 'Kobe Bryant', 'Lebron James'],
        datasets: [
            {
                label: 'Points',
                data: [30.1, 25, 27.1],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 205, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 205, 86, 1)'],
                borderWidth: 1
            },
            {
                label: 'Field Goals%',
                data: [49.7, 44.7, 50.6],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            },
            {
                label: 'Assists',
                data: [5.3, 4.7, 7.4],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            },
            {
                label: 'Blocks',
                data: [0.8, 0.5, 0.8],
                backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(153, 102, 255, 1)', 'rgba(153, 102, 255, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            },
            {
                label: 'Steals',
                data: [2.3, 1.4, 1.6],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['Outside Scoring', 'Inside Scoring', 'Defending', 'Atheleticism', 'Playmaking', 'Rebounding'],
        datasets: [
            {
                label: 'Michael Jordan',
                data: [94, 85, 88, 90, 86, 58],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Kobe Bryant',
                data: [93, 80, 83, 87, 88, 50],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'LeBron James',
                data: [91, 88, 84, 92, 90, 66],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
    type: 'line',
    data: {
        labels: [
            '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
        ],
        datasets:
            [
                {
                    label: 'Michael Jordan',
                    data: [0, 0, 0, 2313, 408, 3041, 2868, 2633, 2753, 2580, 2404, 2541, 0, 457, 2491, 2431, 2357, 0, 0, 0, 1375, 1640],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Kobe Bryant',
                    data: [539, 1220, 996, 1485, 1938, 2019, 2461, 1557, 1819, 2832, 2430, 2323, 2201, 1970, 2078, 1616, 2133, 83, 782, 1161, 0, 0],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'LeBron James',
                    data: [0, 1654, 2175, 2478, 2132, 2250, 2304, 2258, 2111, 1683, 2036, 2089, 1743, 1920, 1954, 2251, 1505, 1698, 1126, 1695, 1590, 1822],
                    backgroundColor: 'rgba(255, 205, 86, 0.2)',
                    borderColor: 'rgba(255, 205, 86, 1)',
                    borderWidth: 1
                }
            ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});