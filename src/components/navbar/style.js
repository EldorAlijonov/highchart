import styled from "styled-components";


const NavbarDiv = styled.div`
    width: 100%;
    padding: 25px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .navbar-conatiner{
        min-width: 1220px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    .title{
        font-weight: 800;
        font-size: 20px;
    }
    .search{
        gap: 10px;
        display: flex;
        align-items: center;
        border: 1px solid #dedee0;
        width: 280px;
        height: 48px;
        border-radius: 25px;
        padding: 5px 20px;
        input{
            width: 100%;
            outline: none;
            border:none;
            background: transparent;
            &::placeholder{
                color: #a0a0a5;
                font-size: 14px;
            }
        }
        .icon{
            color: #333;
        }
        

    }
    .info{
        display: flex;
        align-items: center;
        gap: 20px;
        .bodge{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dedee0;
            width: 40px;
            height: 40px;
            border-radius:50%;
            position: relative;
            .icon{
                color: #9b9ba1;
            }
            &::after{
                top: 4px;
                right: 0;
                position: absolute;
                content: "";
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: red;
            }
        }
           img{
                cursor:pointer;
                width: 36px;
                height: 36px;
                border-radius: 50%;
           }
    }
}

`;



const NavbarStyle = { NavbarDiv };


export default NavbarStyle;