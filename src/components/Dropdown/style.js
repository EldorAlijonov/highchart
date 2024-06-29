import styled from "styled-components";

export const DropdownStyle = styled.div`
    position: relative;
    display: inline-block;
    

    .ant-btn-default{
        font-size: 12px;
        border-radius: 25px; 
        height: 40px;
        
        &:hover{
            color: #000000e0 !important;
            border-color: #d9d9d9 !important;
        }



        .icon{
            transition: 0.2s all;
            color: #5041ab;
        }
    }










    /* .dropdown-button {
        display: flex;
        align-items: center;
        justify-content: center;
       
        height: 48px;
        gap: 10px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #ccc;
        cursor: pointer;
        .icon{
            transform: rotate(180deg);
        }
    } */
`;