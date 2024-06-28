import styled from "styled-components";

export const DropdownStyle = styled.div`
    position: relative;
    display: inline-block;
    

    .dropdown-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${({ $width }) => $width};
        height: 48px;
        gap: 10px;
        border-radius: 25px;
        background-color: #fff;
        border: 1px solid #ccc;
        cursor: pointer;
        .icon{
            transform: rotate(180deg);
        }
    }
`;