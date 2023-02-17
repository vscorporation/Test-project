import React from 'react';
import {Routes, Route} from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserPostPage from "./pages/UserPostPage";
import {Layout} from 'antd';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

const {Content} = Layout;

function App() {
    return (
        <Layout>
            <HeaderComponent/>
            <Content style={ContentStyle}>
                <Routes>
                    <Route path='/' element={<UserListPage/>}/>
                    <Route path='/posts/:id' element={<UserPostPage/>}/>
                </Routes>
            </Content>
           <FooterComponent/>
        </Layout>
    );
}

export default App;

const ContentStyle: React.CSSProperties = {
    padding: '0 50px',
    minHeight: 'calc(100vh - 64px - 64px)'
};