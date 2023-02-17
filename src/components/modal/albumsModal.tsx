import React from 'react';
import {Modal, List} from 'antd';
import {IAlbums} from "../../models/models";
import Preloader from "../Preloader/Preloader";


type Props = {
    isModalOpen: boolean,
    setIsModalOpen: (event: boolean) => void,
    albums: IAlbums[] | undefined,
    loading: boolean
};

function AlbumsModal({isModalOpen, setIsModalOpen, albums, loading}: Props) {
    return (
        <Modal title="Albums" open={isModalOpen} onOk={() => setIsModalOpen(false)}
               onCancel={() => setIsModalOpen(false)}>
            {loading ? <Preloader/> :
                <List
                    itemLayout="horizontal"
                    dataSource={albums}
                    pagination={{
                        onChange: (page) => {
                            //add logic for data parts loading
                        },
                        pageSize: 3,
                    }}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.title}
                                description={`Album: ${item.id}`}
                            />
                        </List.Item>
                    )}
                />}
        </Modal>
    );
}

export default AlbumsModal;
