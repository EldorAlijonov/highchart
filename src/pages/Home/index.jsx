import "./Style.css";

import { TopCard, Sales, History, Summary, Invoices } from '../../components';
const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <TopCard />
            </div>
            <div className="home-container">
                <History />
                <div className="home-right">
                    <Sales />
                    <Summary />
                </div>
            </div>
            <div className="home-container">
                <Invoices />
            </div>
        </div >
    )
}

export default Home
