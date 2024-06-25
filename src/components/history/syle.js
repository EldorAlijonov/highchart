import styled from "styled-components";



const CardStyle = styled.div`
    width: 804px;
    border: 1px solid #d3d3d3;
    border-radius: 25px;
    position: relative;
    display: flex;
    align-content: center;
    padding: 20px;
`;


const ButtonStyle = styled.button`
    border: 1px solid #dedde0;
    outline: none;
    width: 130px;
    height: 48px;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    border-radius: 25px;
    position: absolute;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    .icon{
        color: #5344ac;
    }
`;


const Styles = { CardStyle, ButtonStyle }

export default Styles;