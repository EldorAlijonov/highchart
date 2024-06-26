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


const ButtonStyle = styled.div`
    position: absolute;
    right: 30px;
    z-index: 1;
`;


const Styles = { CardStyle, ButtonStyle }

export default Styles;