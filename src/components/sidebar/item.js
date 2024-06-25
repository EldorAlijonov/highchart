import { RxDashboard } from "react-icons/rx";
import { CiWallet ,CiUser,CiFolderOn} from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbChartArcs3 } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { LiaChartAreaSolid } from "react-icons/lia";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
export const SiderItem = [
    {
        to: "/",
        active: "active",
        icon: <RxDashboard className="menu-icon" />
    },
    {
        icon: <TbChartArcs3 className="menu-icon" />
    },
    {
        icon: <CiWallet className="menu-icon" />
    },
    {
        icon: <HiOutlineShoppingBag className="menu-icon" />
    },
    {
        icon: <MdOutlineWorkOutline className="menu-icon" />
    },
    {
        icon: <LiaChartAreaSolid className="menu-icon" />
    },
    {
        icon: <HiOutlineDocumentText className="menu-icon" />
    },
];


export const SiderItemBottom = [
    {
        icon: <CiUser className="menu-icon" />
    },
    {
        icon: <IoMailOutline className="menu-icon" />
    },
    {
        icon: <CiFolderOn className="menu-icon" />
    },
    {
        icon: <IoSettingsOutline  className="menu-icon" />
    },
]


