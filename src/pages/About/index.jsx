import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const About = () => {
    const yearSelected = useSelector((state) => state.dropdown.value);
    const tableDetail = useSelector((state) => state.table.value);
    const [rowOne, setRowOne] = useState(tableDetail[0])
    useEffect(() => {

    }, [])
    console.log('ddd')
//     [
//         {
//             rowId: 0,
//             details: [
//                 "detaile1", "detaile3", "detaile4", "detaile2"
//             ]
//         }, {
//             rowId: 1,
//             details: [
//                 "detaile1", "detaile3", "detaile4", "detaile2"
//             ]
//         }, {
//             rowId: 2,
//             details: [
//                 "detaile1", "detaile3", "detaile4", "detaile2"
//             ]
//         },
// ]

    tableDetail.map((item) => {
        console.log(item)
    })


    return (
        <div style={{ height: "100vh" }}>
            <div className="selected-year">
                {
                    yearSelected.length > 0 ? yearSelected.map((item, index) => (
                        <div key={index}>
                            {index + 1}st selected year  {item}
                        </div>
                    )) : <div>Year is not selected</div>
                }
            </div>
            <div className="selected-detail">
                <h1>Detail</h1>
                {
                    tableDetail.length > 0 ? tableDetail.map((item, index) => (
                        <div key={index}>
                            Details selected from row {+item.rowId + 1}  <br /> {item.option}
                        </div>
                    )) : <div>Detail is not selected</div>
                }
            </div>
        </div>
    )
}

export default About;
