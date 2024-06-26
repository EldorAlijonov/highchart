import { BitCoin, Doge, ETH, XRP } from '../assets';
import { RiArrowDropDownLine } from "react-icons/ri";

export const CardItem = [
    {
        img: <img src={BitCoin} alt="BitCoin" />,
        title: "BTC/USD",
        time: "Last 24h-1.24",
        total: "6,325.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+7.24",
        chartData: [
            [0.1, 40],
            [0.1, 46],
            [0.2, 48],
            [0.3, 48],
            [0.4, 49],
            [0.5, 69],
            [0.6, 340],
            [0.7, 344],
            [0.8, 145],
            [0.9, 146],
            [1.0, 145],
            [1.1, 142],
            [1.2, 148],
            [1.3, 14],
            [1.4, 148],
            [1.5, 144],
            [1.6, 147],
            [1.7, 142],
            [1.8, 148],
        ],
        status: "pilus",
    },
    {
        img: <img src={Doge} alt="Doge" />,
        title: "DOGE/USD",
        time: "Last 24h-0.9",
        total: "2,017.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+4.13",
        chartData: [
            [0.1, 340],
            [0.1, 330],
            [0.2, 200],
            [0.3, 300],
            [0.4, 350],
            [0.5, 200],
            [0.6, 260],
            [0.7, 200],
            [0.8, 280],
            [0.9, 100],
            [1.0, 145],
            [1.1, 142],
            [1.2, 250],
            [1.3, 160],
            [1.4, 220],
            [1.5, 200],
            [1.6, 147],
            [1.7, 200],
            [1.8, 330],
        ],
        status: "pilus",
    },
    {
        img: <img src={ETH} alt="ETH" />,
        title: "ETH/USD",
        time: "Last 24h-0.9",
        total: "1,321.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+5,4",
        chartData: [
            [0.1, 340],
            [0.1, 330],
            [0.2, 200],
            [0.3, 300],
            [0.4, 350],
            [0.5, 200],
            [0.6, 260],
            [0.7, 200],
            [0.8, 280],
            [0.9, 100],
            [1.0, 145],
            [1.1, 142],
            [1.2, 250],
            [1.3, 160],
            [1.4, 220],
            [1.5, 200],
            [1.6, 147],
            [1.7, 200],
            [1.8, 340],
        ],
        status: "pilus",
    },
    {
        img: <img src={XRP} alt="XRP" />,
        title: "XRP/USD",
        time: "Last 24h-0.9",
        total: "819,00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "-10,53",
        chartData: [
            [0.1, 340],
            [0.1, 330],
            [0.2, 200],
            [0.3, 300],
            [0.4, 350],
            [0.5, 200],
            [0.6, 260],
            [0.7, 200],
            [0.8, 280],
            [0.9, 100],
            [1.0, 145],
            [1.1, 142],
            [1.2, 250],
            [1.3, 160],
            [1.4, 220],
            [1.5, 200],
            [1.6, 147],
            [1.7, 200],
            [1.8, 340],
        ],
        status: "minus",
    },

]