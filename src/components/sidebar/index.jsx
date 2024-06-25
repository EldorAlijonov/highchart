import { SiderItem, SiderItemBottom } from "./item";
import { Link } from "react-router-dom";
import SidebarStyle from "./style";
import logo from "../../assets/logo.png"
const Sidebar = () => {
    const { SidebarSider, SidebarLogo, SidebarMenu } = SidebarStyle;

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
                                <Link className={`link ${item.active}`}>
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
                                <Link className={`link ${item.active}`}>
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
