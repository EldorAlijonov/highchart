import React, { useRef } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Styles from './syle';
import CustomDropdown from '../Dropdown';



const History = () => {

    const { CardStyle, ButtonStyle } = Styles
    const chartComponentRef = useRef(null);
    const getOptions = {
        colors: ['#8a24ff', '#4b9f47', '#f5b544', '#2272f0'],
        chart: {
            type: 'column',
            inverted: false,
            polar: false,
            width: 750
        },
        accessibility: {
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            }
        },
        title: {
            text: 'History',
            align: 'left',
            y: 10,
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333'
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            layout: 'horizontal',
            borderWidth: 0,
            x: -10,
            y: -20
        },
        tooltip: {
            useHTML: true,
            backgroundColor: '#040415',
            borderRadius: 10,
            borderWidth: 0,
            formatter: function () {
                return `
                    <div style="width: 200px; height: 142px; padding: 10px;">
                        <div style="z-index: 1; width: 100%; display: flex; align-items: center; justify-content: space-between;">
                            <span style="color: #fff; font-size: 13px; line-height: 13px;">18 ${this.x} 2021</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2272f0" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="19" cy="12" r="2" />
                            </svg>
                        </div>
                        <div style="color: #fff; font-size: 20px; margin-top: 20px; line-height: 20px; font-weight: bold;">$2,017.00</div>
                        <div style="color: #686872; font-size: 13px; margin-top: 20px; line-height: 13px; font-weight: bold;">${this.series.name}</div>
                        <div style="margin-top: 10px; display: flex; align-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <path d="M3 3V21H21" stroke="#4ea04a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="7" y="14" width="3" height="7" fill="#4ea04a"/>
                                <rect x="12" y="10" width="3" height="11" fill="#4ea04a"/>
                                <rect x="17" y="5" width="3" height="16" fill="#4ea04a"/>
                            </svg>
                            <div style="color: #4ea04a; font-size: 13px; font-weight: bold;">${this.y < 50 ? "-" : "+"}${this.y}.00</div>
                        </div>
                    </div>`;
            }

        },
        pane: {
            size: "85%",
            innerSize: "20%",
        },
        xAxis: {
            tickInterval: 0,
            labels: {
                y: 30,
                enabled: true,
                style: {
                    color: "#333",
                    fontWeight: "bold",
                }
            },
            lineWidth: 0,
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            accessibility: {
                description: 'months'
            }
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineDashStyle: 'LongDash',
            gridLineColor: '#d3d3d3',
            crosshair: {
                enabled: true,
                color: '#b7b7bc'
            },
            title: {
                text: null
            },
            lineWidth: 0,
            tickInterval: 50,
            min: 0,
            max: 450,
            labels: {
                style: {
                    fontSize: '14px',
                    color: '#b7b7bc',
                },
                formatter: function () {
                    let interval = this.value / 10;
                    return interval > 0 ? `${interval}K` : '0';
                }
            },
            accessibility: {
                description: 'Number of medals'
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 10,
                pointPadding: 0.15,
                groupPadding: 0.19,
                borderRadius: 15,
            }
        },
        series: [
            {
                name: 'Marketing Sales',
                data: [42, 55, 73, 66, 74, 95, 57, 88, 72, 43, 64, 55]
            },
            {
                name: 'Current Sales',
                data: [44, 57, 76, 63, 72, 95, 58, 83, 74, 46, 63, 75]
            },
            {
                name: 'Online Sales',
                data: [45, 56, 74, 67, 72, 93, 54, 86, 73, 42, 65, 60]
            },
            {
                name: 'Offline Sales',
                data: [41, 52, 73, 64, 75, 156, 52, 83, 74, 45, 66, 75]
            }
        ],
        accessibility: {
            enabled: false,
        },
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: ''
                            }
                        },
                        subtitle: {
                            text: ''
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }
            ]
        }
    };



    const options = ['2022', '2023', '2024'];
    const handleSelect = (option) => {
        const selectedItem = options[option]
        console.log(`Selected: ${selectedItem}`);
    };


    return (
        <CardStyle>
            <ButtonStyle >
                <CustomDropdown width={"140px"} options={options} onSelect={handleSelect} title={"This Year"} />
            </ButtonStyle>
            <HighchartsReact
                highcharts={Highcharts}
                options={getOptions}
                ref={chartComponentRef}
            />
        </CardStyle>
    )
}

export default History
