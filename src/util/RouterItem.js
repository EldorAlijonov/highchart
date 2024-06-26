import { About, Document, Home, Information, Message, Setting, Shop, Statistic, User, Wallet, Work } from "../pages";


export const RouterItem = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    },
    ,
    {
        path: "wallet",
        element: <Wallet />
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "work",
        element: <Work />
    },
    {
        path: "statistic",
        element: <Statistic />
    },
    {
        path: "document",
        element: <Document />
    },
    {
        path: "user",
        element: <User />
    },
    {
        path: "message",
        element: <Message />
    },
    {
        path: "information",
        element: <Information />
    },
    {
        path: "setting",
        element: <Setting />
    },
]