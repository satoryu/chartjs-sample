import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import Chart from 'chart.js';
import 'chartjs-plugin-colorschemes';
import _ from 'lodash';

function loadChart() {
    const ctx = document.getElementById('chart');
    const datasets = _.times(10, function(i) {
        let data = _.times(5, () => _.random(0, 1, true));

        return {
            label: `Data ${i}`,
            data: data
        }
    });

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: datasets
        },
        options: {
            plugins: {
                colorschemes: {
                    scheme: 'brewer.Paired12'
                }
            }
        }
    })
}

loadChart();
