import React from 'react';
import styles from '../styles/Slug.module.css';
import {Line} from 'react-chartjs-2';

export default function LineChart({updateData}) {
    return (
        <div className={styles.chart}>
                        <Line  data= {{
                    labels: updateData.map( data => {return data.Date.split('T')[0]}),
                    datasets: [{
                        label: 'Confirm Cases',
                        data: updateData.map(data => {return data.Cases}),
                        backgroundColor: 'transparent',
                        borderColor: '#000',
                        pointBackgroundColor: ' #000',
                        borderWidth: 1
                    }]
                }}
                height = {410}
                width = {480}
                options = {{
                    maintainAspectRatio:false,
                    // tension: 0.1,
                    scales: {
                        yAxes: [{
                            ticks:{
                                beginAtZero: true,
                                suggestedMax: Math.max(...updateData.map(data => {return data.Cases})) *2, 
                            }
                           
                        }
                    ]
                    }
                }}
                />
        </div>
    )
}
