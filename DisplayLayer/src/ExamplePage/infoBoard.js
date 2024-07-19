import {Descriptions } from 'antd';
import React, { useState } from 'react'

export default function InfoBoard() {
    const [name, setname] = useState("Jeremy Milson");
    const [gender,setgender] = useState("Male");
    const [organization,setorganization] = useState("Australian National University");
    const [vertime,setvertime] = useState("2023-04-24 18:00:00");


    return (
        <Descriptions title="Please Check the Correctness of Your Information" bordered>
            <Descriptions.Item label="Name">{name}</Descriptions.Item>
            <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
            {/* <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item> */}
            <Descriptions.Item label="Organization">{organization}</Descriptions.Item>
            <Descriptions.Item label="Verification Time" span={2}>
            {vertime}
            </Descriptions.Item>
            <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
            <Descriptions.Item label="Additional Information">
            Data disk type: MongoDB
            <br/>
            </Descriptions.Item>
        </Descriptions>
    )
}
