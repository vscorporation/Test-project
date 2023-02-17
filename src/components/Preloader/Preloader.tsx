import {Spin} from 'antd';
import React from 'react';


const Preloader = () => {

    return (
        <div style={PreloaderStyle}>
            <Spin size="large"/>
        </div>
    )
}

export default Preloader

const PreloaderStyle: React.CSSProperties = {
    height: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
};