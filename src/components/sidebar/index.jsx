import { SiderItem, SiderItemBottom } from "./item";
import { Link, useLocation } from "react-router-dom";
import SidebarStyle from "./style";
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
const Sidebar = () => {
    const { SidebarSider, SidebarLogo, SidebarMenu } = SidebarStyle;
    const location = useLocation()
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);



    const handleActive = (to) => setActive(to);



    return (
        <SidebarSider>
            <div className="conatiner">
                <SidebarLogo>
                    <img src={logo} alt="" width={33} />
                </SidebarLogo>
                <SidebarMenu $margin={"100px"}>
                    <ul>
                        {SiderItem.map((item, index) => (
                            <li key={index}>
                                <Link className={`link ${active === item.to ? "active" : ""}`}
                                    to={item.to}
                                    onClick={() => handleActive(item.to)}
                                >
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </SidebarMenu>
                <SidebarMenu $margin={"88px"}>
                    <ul>
                        {SiderItemBottom.map((item, index) => (
                            <li key={index}>
                                <Link className={`link ${active === item.to ? "active" : ""}`}
                                    to={item.to}
                                    onClick={() => handleActive(item.to)}
                                >
                                    {item.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </SidebarMenu>
            </div>
        </SidebarSider>
    )
}

export default Sidebar
