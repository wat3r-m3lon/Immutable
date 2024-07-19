import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EditProfileForm from './EditProfileForm';


const EditProfileModal = ({name, email, id}) => {
  
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
  return (
    <>
    <Button 
    type='primary' 
    className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
    onClick={showModal}
    >
      Edit
    </Button>
      <Modal title="Edit The Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div style={{marginTop:'30px', marginLeft:'20px'}}>
          <EditProfileForm name={name} email={email} id={id} handleCancel={handleCancel}/>
        </div>        
      </Modal>
    </>
  );
};
export default EditProfileModal;