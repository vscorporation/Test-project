import React, {useEffect} from 'react';
import {Typography, List, Row, Col, Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import {useParams, Link} from "react-router-dom";
import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api";
import Preloader from "../components/Preloader/Preloader";
import {openNotificationWithIcon} from '../utils/utils'

const {Title} = Typography;

function UserPostPage() {
    const {id} = useParams() as { id: string }

    const {isLoading, isError, data} = useSearchPostsQuery(id)  //hook for fetching posts

    useEffect(() => {
        isError && openNotificationWithIcon("posts loading error")
    }, [isError])


    if (isLoading) {
        return <Preloader/>
    }

    return (
        <Row>
            <Col span={24} style={BreadcrumbBlockStyle}>
                <Breadcrumb>
                    <Breadcrumb.Item key="home">
                        <Link to="/Test-project/"> <HomeOutlined/></Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Posts</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col span={24}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.body}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default UserPostPage;

const BreadcrumbBlockStyle: React.CSSProperties = {
    marginTop: 30
};
