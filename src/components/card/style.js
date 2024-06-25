import styled from "styled-components";

const Columns = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    /* justify-content: space-between; */
    gap: 27px;
`;


const CardStyle = styled.div`
    width: 284px;
    height: 288px;
    border: 1px solid #d3d3d3;
    border-radius: 25px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-container{
        width: 218px;
        height: 223px;
    }
`;

const CardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img{
        border-radius: 50%;
        width: 41px;
        height: 41px;
        background-color: #d3d3d3;
    }
    span{
        color: #9e93a5;
        font-size: 13px;
    }
`;

const CardCenter = styled.div`
    h4{
        font-size: 22px;
        font-weight: 700;
        line-height: 10px;
        margin-top: 20px;
    }
    span{
        margin-top: 20px;
        line-height: 10px;
        color: #c7c7ca;
        font-size: 12px;
    }
`;


const CardPilus = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    
    button {
        background-color: ${({ $minus }) => ($minus == "minus" ? '#f8d7da' : '#edf5ec')}; 
        width: 24px;
        height: 24px;
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
            transform: ${({ $minus }) => ($minus == "minus" ? "" : "rotate(180deg)")};
            color: ${({ $minus }) => ($minus == "minus" ? '#dc3545' : '#4ea04a')}; 
            font-size: 24px;
        }
    }

    span {
        color: ${({ $minus }) => ($minus == "minus" ? '#dc3545' : '#4ea04a')}; 
        font-weight: 700;
        font-size: 12px;
    }
`;

export default CardPilus;


const CardBottom = styled.div`
    width: 100%;    
    margin-top: 13px;
`;

export const TopCardStyle = { Columns, CardStyle, CardTop, CardCenter, CardPilus, CardBottom };
