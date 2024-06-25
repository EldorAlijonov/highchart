import { BitCoin, Doge, ETH, XRP } from '../../assets';
import { RiArrowDropDownLine } from "react-icons/ri";
import { elevationData1, elevationData2 } from './evevationData';


export const CardItem = [
    {
        img: <img src={BitCoin} alt="BitCoin" />,
        title: "BTC/USD",
        time: "Last 24h-1.24",
        total: "6,325.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+7.24",
        chartData: elevationData1,
        status: "pilus",
    },
    {
        img: <img src={Doge} alt="Doge" />,
        title: "DOGE/USD",
        time: "Last 24h-0.9",
        total: "2,017.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+4.13",
        chartData: elevationData2,
        status: "pilus",
    },
    {
        img: <img src={ETH} alt="ETH" />,
        title: "ETH/USD",
        time: "Last 24h-0.9",
        total: "1,321.00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "+5,4",
        chartData: elevationData1,
        status: "pilus",
    },
    {
        img: <img src={XRP} alt="XRP" />,
        title: "XRP/USD",
        time: "Last 24h-0.9",
        total: "819,00",
        icons: <RiArrowDropDownLine className="icon" />,
        prasent: "-10,53",
        chartData: elevationData1,
        status: "minus",
    },

]