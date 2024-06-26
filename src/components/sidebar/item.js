import { RxDashboard } from "react-icons/rx";
import { CiWallet, CiUser, CiFolderOn } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbChartArcs3 } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { LiaChartAreaSolid } from "react-icons/lia";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
export const SiderItem = [
    {
        to: "/",
        icon: <RxDashboard className="menu-icon" />
    },
    {
        to: "/about",
        icon: <TbChartArcs3 className="menu-icon" />
    },
    {
        to: "/wallet",
        icon: <CiWallet className="menu-icon" />
    },
    {
        to: "/shop",
        icon: <HiOutlineShoppingBag className="menu-icon" />
    },
    {
        to: "/work",
        icon: <MdOutlineWorkOutline className="menu-icon" />
    },
    {
        to: "/statistic",
        icon: <LiaChartAreaSolid className="menu-icon" />
    },
    {
        to: "/document",
        icon: <HiOutlineDocumentText className="menu-icon" />
    },
];


export const SiderItemBottom = [
    {
        to: "/user",
        icon: <CiUser className="menu-icon" />
    },
    {
        to: "/message",
        icon: <IoMailOutline className="menu-icon" />
    },
    {
        to: "/information",
        icon: <CiFolderOn className="menu-icon" />
    },
    {
        to: "/setting",
        icon: <IoSettingsOutline className="menu-icon" />
    },
]


