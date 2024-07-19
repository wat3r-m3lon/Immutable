import React, { useState } from 'react';
import { Button, message, Form, Input } from 'antd';
import axios from 'axios';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const url = "http://localhost:8080/admin/";


// This component is used to edit and submit the change of the user name and email

const EditProfileForm = ({name, email, id, handleCancel}) => {

    const [inputname, setInputname] = useState('');
    const [inputemail, setInputemail] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
        });
      };
    
    const error = () => {
    messageApi.open({
        type: 'error',
        content: 'This is an error message',
    });
    };

    const handleInputNameChange = (e) => {
        setInputname(e.target.value);
    };

    const handleInputEmailChange = (e) => {
        setInputemail(e.target.value);
    };

    const save = (uname, uemail, id) => {
        axios.put(url + id, {
            "id": id,
            "email": uemail,
            "password": " ",
            "username": uname
        }).then((response)=>{
            setInputname("");
            setInputemail(""); 
            success();
            setTimeout(() => {
               handleCancel();
            }, 1000);
        }).catch((err)=>{
            error();
        })
    }

    return (
        <>
            {contextHolder}
            <Form name="basic"
            form={form}
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 400,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input value={inputname} placeholder={name} onChange={handleInputNameChange}/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Please enter the correct email!',
                    type:'email'
                },
                ]}
            >
                <Input value={inputemail} placeholder={email} onChange={handleInputEmailChange}/>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button className='mt-6 ml-10' style={{color:'white', backgroundColor:'#1E90FF'}} type="primary" 
                    onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        save(inputname, inputemail, id);
                        onReset();}
                        }>
                    Submit
                </Button>
            </Form.Item>
            </Form>
        </>);                 
}

export default EditProfileForm;

