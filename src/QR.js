import QRCode from 'qrcode.react'
import React from "react";

function QR(props) {
    return (
        <p style={props.url.length > 0 ? {} : {display: 'none'}}>
            <span>Generated QRCode:</span><br/>
            <QRCode fgColor={props.color} bgColor='#FFF' value={props.url}/>
        </p>
    );
}

export default QR;
