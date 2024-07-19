import React, { useState } from 'react';
import { Button, Modal, Table } from 'antd';

const ViewProfileModal = ({name, email, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const data = [
    {
      key: '1',
      property: 'Name',
      value: name,
    },
    {
      key: '2',
      property: 'Email',
      value: email,
    },
    {
      key: '3',
      property: 'ID',
      value: id,
    },
  ];

  return (
    <>
      <Button 
        type='primary' 
        className="flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
        onClick={showModal}
      >
        View
      </Button>
      <Modal 
        title="View The Profile" 
        visible={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        footer={null}
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </Modal>
    </>
  );
};

export default ViewProfileModal;
