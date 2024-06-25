import styled from "styled-components";


export const InvoicesStyle = styled.div`
    width: 100%;
    border: 1px solid #d3d3d3;
    padding: 30px;
    border-radius: 25px;

    .card-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .item{
            h2{
                color: #333;
                font-size: 22px;
                line-height: 22px;
                font-weight: 700;
            }
            span{
                color: #9e93a5;
                font-size: 14px;
            }
        }
        button{
            font-size: 14px;
            font-weight: 600;
            width: 188px;
            height: 48px;
            background-color: #2272f0;
            color: #fff;
            border: none;
            outline:none;
            border-radius: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap:10px;
        }
    }
    table{
        width: 100%;
        border-collapse: collapse;
        tr {
            td,
            th {
                padding: 10px;
                text-align: start;
                &:last-child{
                    display: flex;
                }
            }

            th {
                font-weight: 500;
                font-size: 14px;
                color: #9e93a5;
            }

            td{
                color: #111;
                font-weight: 600;

               

                .pilus{
                    color: #4ea04a;
                }
                .minus{
                    color: red;
                }

                .Paid{
                    width: 60px;
                    height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #4ea04a;
                    background-color: #edf5ec;
                    padding:0 15px;

                    border-radius: 20px;
                }
                .Unpaid{
                    background-color: #FCEDE8;
                    width: 70px;
                    height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #e6521f;
                    padding:0 15px;

                    border-radius: 20px;
                }

                .Pending{
                    background-color: #fef7ec;
                    width: 80px;
                    height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #f5b544;
                    padding:0 15px;

                    border-radius: 20px;
                }
                .customer{
                    display: flex;
                    gap: 10px;
                    img{
                        border-radius: 50%;
                        border: 1px solid #d3d3d3;
                    }
                    .item-header{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 5px;
                        h4{
                            font-size: 14px;
                            line-height: 14px;
                        }
                        span{
                            font-size: 11px;
                            line-height: 11px;
                            color: #9e93a5;
                        }
                    }
                }
                .btn{
                    border: 1px solid #dedde0;
                    outline: none;
                    width: 120px;
                    height: 48px;
                    background-color: transparent;
                    color: #333;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    cursor: pointer;
                    .icon{
                        color: #5344ac;
                    }
                }
            }
        }
    }
`; 