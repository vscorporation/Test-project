import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

function FooterComponent() {
    return (
        <Footer style={footerStyle}>@Test-project</Footer>
    );
}

export default FooterComponent


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: '#001529',
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
    opacity: 0.9,
    height: 64,
};
