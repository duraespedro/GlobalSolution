document.addEventListener("DOMContentLoaded", function() {
    // Gráficos da página de análise de dados
    const ctx1 = document.getElementById('chart1')?.getContext('2d');
    const ctx2 = document.getElementById('chart2')?.getContext('2d');
    const ctx3 = document.getElementById('chart3')?.getContext('2d');
    const ctx4 = document.getElementById('chart4')?.getContext('2d');

    if (ctx1) {
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Temperatura (°C)',
                    data: [22, 23, 24, 24.5, 25, 26],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    if (ctx2) {
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'pH',
                    data: [8.1, 8.0, 8.2, 8.3, 8.4, 8.5],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (ctx3) {
        new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Salinidade (PSU)',
                    data: [35, 35.1, 35.2, 35.3, 35.4, 35.5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            }
        });
    }

    if (ctx4) {
        new Chart(ctx4, {
            type: 'doughnut',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: 'Nível de Oxigênio (mg/L)',
                    data: [6.8, 6.7, 6.6, 6.5, 6.4, 6.3],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            }
        });
    }

    // Gráficos da página de mapeamento de poluentes
    const ctx5 = document.getElementById('chart5')?.getContext('2d');
    const ctx6 = document.getElementById('chart6')?.getContext('2d');
    const ctx7 = document.getElementById('chart7')?.getContext('2d');
    const ctx8 = document.getElementById('chart8')?.getContext('2d');

    if (ctx5) {
        new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: ['Zona Costeira', 'Mar Aberto', 'Estuários'],
                datasets: [{
                    label: 'Plástico (PPM)',
                    data: [55, 35, 60],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (ctx6) {
        new Chart(ctx6, {
            type: 'bar',
            data: {
                labels: ['Zona Costeira', 'Mar Aberto', 'Estuários'],
                datasets: [{
                    label: 'Óleo (PPM)',
                    data: [30, 40, 20],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (ctx7) {
        new Chart(ctx7, {
            type: 'bar',
            data: {
                labels: ['Zona Costeira', 'Mar Aberto', 'Estuários'],
                datasets: [{
                    label: 'Outros (PPM)',
                    data: [15, 25, 20],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (ctx8) {
        new Chart(ctx8, {
            type: 'pie',
            data: {
                labels: ['Plástico', 'Óleo', 'Outros'],
                datasets: [{
                    label: 'Composição da Poluição',
                    data: [55, 30, 15],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 2
                }]
            }
        });
    }
});
