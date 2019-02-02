import Chart from 'chart.js';
import 'chartjs-plugin-colorschemes';
import _ from 'lodash';

function loadChart() {
    const ctx = document.getElementById('chart');
    const data = _.times(5, () => _.random(0, 1, true));

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets:[
                {
                    label: 'Sample',
                    data: data
                }
            ]
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
