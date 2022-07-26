import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react';
import dataUser from '../dataUser.json'
import { db } from '../firebase/config.js';
// import { setDoc, doc } from "firebase/firestore";


const QrCode = () => {
    const [value, setValue] = useState({})

    useEffect(() => {
        setValue(JSON.stringify(dataUser))
        console.log('value of json', value);

        const data = db.firestore()
        data.collection("web-events").doc("amit").set(value)

    }, [value])




    return (
        <div style={{ textAlign: 'center' }}>
            <h1>QrCode</h1>
            <QRCode
                id='abc'
                value={value}
                size={350}
            />
        </div>
    )
}


export default QrCode;