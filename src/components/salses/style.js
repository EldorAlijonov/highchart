import styled from "styled-components";

const CardStyle = styled.div`
    width: 390px;
    height: ${({ $cardHeight }) => $cardHeight};
    border: 1px solid #d3d3d3;
    border-radius: 25px;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    padding-bottom: 20px;
  .card-content {
    width: 100%;

    .top {
        padding: 30px 30px 0px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }

      .icon {
        cursor: pointer;
        font-size: 24px;
        color: #2772f0;
      }
    }
    .card-date{
    padding: 20px 30px 0px 30px;
    font-size: 14px;
    color: #d2d2d2;
}

.card-bottom{
        font-size: 14px;
        color: #d2d2d2;
        line-height: 16px;
        text-align: center;
    }
  }
`;

export default CardStyle;
