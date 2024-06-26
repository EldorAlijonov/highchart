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

    .dropdown-menu {
        border-radius: 10px;
        position: absolute;
        left: 0;
        right: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        z-index: 1;

        &.upwards {
            bottom: 100%;
        }
        .dropdown-item {
            padding: 10px 20px;
            cursor: pointer;
        }
    
        .dropdown-item:hover {
            border-radius: 10px;
            background-color: #f1f1f1;


        }
    }


`;