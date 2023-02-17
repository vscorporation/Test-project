import React, {useEffect, useState} from 'react';
import {List, Space, Avatar, Col, Row, Button} from 'antd';
import {useSearchUsersQuery, useSearchAlbumsQuery} from '../store/jsonplaceholder/jsonplaceholder.api'
import {
    UserOutlined,
    PhoneOutlined,
    MailOutlined,
    IeOutlined
} from '@ant-design/icons';
import Preloader from "../components/Preloader/Preloader";
import AlbumsModal from "../components/modal/albumsModal";
import {useNavigate} from "react-router-dom";
import {openNotificationWithIcon} from '../utils/utils'


function UserListPage() {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(0)
    const {isLoading, isError, data} = useSearchUsersQuery('')  //hook for fetching users
    const {isFetching: albumsLoading, isError: albumsError, data: albums} = useSearchAlbumsQuery(selectedUser, {
        skip: selectedUser === 0
    }) //hook for fetching albums

// errors handle
    useEffect(() => {
        isError && openNotificationWithIcon("users loading error")
        albumsError && openNotificationWithIcon("albums loading error")
    }, [isError, albumsError])
// errors handle

// generate contact blocks
    const IconText = ({icon, text}: { icon: React.FC; text: string }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
// generate contact blocks


// function for open modal & fetch current albums
    const openModal = (id: number) => {
        setSelectedUser(id)
        setIsModalOpen(true)
    }
// function for open modal & fetch current albums


    const openPostsPage = (id: number) => {
        navigate(`posts/${id}`)
    }


    if (isLoading) {
        return <Preloader/>
    }

    return (
        <Row justify={'center'}>
            <Col span={18} style={listBlock}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            //add logic for data parts loading
                        },
                        pageSize: 7,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <IconText icon={MailOutlined} text={item.email} key="list-vertical-mail"/>,
                                <IconText icon={PhoneOutlined} text={item.phone} key="list-vertical-phone"/>,
                                <IconText icon={IeOutlined} text={item.website} key="list-vertical-website"/>,
                            ]}
                            extra={[

                                    <Space key='extra-btn' style={extraBlock}>
                                        <Button onClick={() => openPostsPage(item.id)} type="primary"
                                                shape="round">Posts</Button>
                                        <Button onClick={() => openModal(item.id)} type="primary"
                                                shape="round">Albums</Button>
                                    </Space>

                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar icon={<UserOutlined/>}/>}
                                title={item.name}
                                description={item.company.name}
                            />
                        </List.Item>
                    )}
                />
                <AlbumsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} albums={albums}
                             loading={albumsLoading}/>
            </Col>
        </Row>
    );
}

export default UserListPage;

const listBlock: React.CSSProperties = {
    marginTop: 30
};
const extraBlock: React.CSSProperties = {
    height: '100%'
};


