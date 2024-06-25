import React from 'react';
import { TopCardStyle } from './style';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CardItem } from './item';

const TopCard = () => {
    const { Columns, CardStyle, CardTop, CardCenter, CardPilus, CardBottom } = TopCardStyle;

    const options = (chartData) => ({
        chart: {
            type: "area",
            height: 90,
            width: 230,
            marginLeft: -1


        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        xAxis: {
            lineWidth: 0,
            tickWidth: 0,
            labels: {
                enabled: false

            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            gridLineWidth: 0,

            labels: {
                enabled: false

            },
            title: {
                text: null
            }
        },
        plotOptions: {
            area: {
                color: '#2772f0',
                fillOpacity: 0.05,
                marker: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [
            { data: chartData }

        ],
        accessibility: {
            enabled: false
        },
        responsive: {
            rules: [
                {
                    condition: {
                        minWidth: 200
                    },

                }
            ]
        }
    });



    return (
        <Columns>
            {CardItem.map((card, index) => (
                <CardStyle key={index}>
                    <div className="card-container">
                        <CardTop>
                            {card.img}
                            <span>{card.title}</span>
                        </CardTop>
                        <CardCenter>
                            <h4>${card.total}</h4>
                            <span>{card.time}</span>
                        </CardCenter>
                        <CardPilus $minus={card.status}>
                            <button>
                                {card.icons}
                            </button>
                            <span>{card.prasent} %</span>
                        </CardPilus>
                        <CardBottom>
                            <HighchartsReact highcharts={Highcharts} options={options(card.chartData)} />
                        </CardBottom>
                    </div>
                </CardStyle>
            ))}
        </Columns>
    );
};

export default TopCard;
