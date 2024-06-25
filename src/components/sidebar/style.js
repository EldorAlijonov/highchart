import styled from "styled-components";

const SidebarSider = styled.div`
    background-color: #e9f0fd;
    width: 100px;
    max-height: 100%;

    .container{
        width: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

const SidebarLogo = styled.div`
    margin-top: 33px;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
`;

const SidebarMenu = styled.div`
    width: 100%;
    margin-top: ${({ $margin }) => $margin};
    ul{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        list-style: none;
        width: 100%;
        position: relative; 
        li{
            width: 100%;
            text-align: center;
            position: relative;

            .link {
            padding: 10px;
            display: block;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &.active::after {
                position: absolute;
                right: 0;
                content: "";
                width: 3px;
                height: 70%;
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
                background-color: #2772f0;
        }

        .menu-icon {
            font-size: 17px;
            color: #74a4f5;
                    }
            }       
        }
    }

`;


const SidebarStyle = { SidebarSider, SidebarLogo, SidebarMenu };

export default SidebarStyle;