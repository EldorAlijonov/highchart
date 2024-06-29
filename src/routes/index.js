import { Route, Routes } from "react-router-dom";
import {
    About, Document, ErrorPage, Home, Information, Message,
    Setting, Shop, Statistic, User, Wallet, Work
} from "../pages";
import { Navbar, Sidebar } from "../components";

const Router = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="app-conatiner">
                <Navbar />
                <div className="app-content">
                    <Routes>
                        <Route path="/" >
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="wallet" element={<Wallet />} />
                            <Route path="shop" element={<Shop />} />
                            <Route path="work" element={<Work />} />
                            <Route path="statistic" element={<Statistic />} />
                            <Route path="document" element={<Document />} />
                            <Route path="user" element={<User />} />
                            <Route path="message" element={<Message />} />
                            <Route path="information" element={<Information />} />
                            <Route path="setting" element={<Setting />} />
                        </Route>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default Router;
