import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";
import CardStyle from '../Salses/style';

const Summary = () => {

    const options = {
        colors: ['#2272f0'],
        chart: {
            type: 'column',
            height: 150,
        },
        title: {
            text: null,
        },
        subtitle: {
            text: null,
        },
        xAxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                enabled: true,
                style: {
                    color: "#333",
                    fontWeight: "bold",
                }

            },
            lineWidth: 0,
        },
        yAxis: {
            min: 0,
            max: 40,
            gridLineWidth: 0,
            title: {
                text: null
            },
            labels: {
                enabled: false
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                borderRadius: 15,
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                name: 'Corn',
                data: [10, 25, 18, 30, 35, 15, 23]
            }
        ],
        accessibility: {
            enabled: false,
        },
    }



    return (
        <CardStyle $cardHeight={"270px"}>
            <div className="card-content">
                <div className="top">
                    <h4>Summary</h4>
                    <HiOutlineDotsHorizontal className="icon" />
                </div>
                <span className="card-date">1 May-13 May, 2021</span>
                <div className="chart">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </div>
        </CardStyle>
    )
}

export default Summary
