import React from 'react';
import {Layout} from 'antd';
import {Typography} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

const {Header} = Layout;
const {Title} = Typography;

function HeaderComponent() {
    const navigate = useNavigate()
    return (

        <Header style={headerStyle}>
            <Title onClick={() => navigate('/')} style={logoStyle}><AppstoreOutlined/>Test Project</Title>
        </Header>
    );
}

export default HeaderComponent;


const headerStyle: React.CSSProperties = {
    color: '#fff',
    paddingInline: 50,
    height: 64,
    lineHeight: '64px',
    opacity: 0.9,
    display: "flex",
    alignItems: 'center'
};
const logoStyle: React.CSSProperties = {
    margin: 0,
    color: "white",
    cursor: 'pointer'
};