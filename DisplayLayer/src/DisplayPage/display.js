import React, { useState } from 'react';
import './index.css';
import { Layout, Avatar,Space } from 'antd';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Col, Divider, Row, Card } from 'antd';
import { UserOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled, CheckCircleTwoTone, WalletTwoTone,LinkOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Content, Footer } = Layout;

const Display = () => {

    const [badge,setbadge] = useState(require("./images/example_badge.png"))
    const [issuer, setissuer] = useState('A valid issuer')
    const [id, setid] = useState('c34bed')
    const [name, setname] = useState('user name')

    return(
    <Layout className="layout">
        <Navbar bg="primary" variant="dark">
            <Container style={{marginLeft:'60px'}}>
                <Navbar.Brand href="#home">
                    <img alt=' ' src='./images/blockchain.svg ' width={60} height={60}/> {' '}
                    <h4 style={{display:'inline-block',paddingTop:'10px'}}>NFT Badge Design</h4>
                </Navbar.Brand>
                <Nav className="me-auto" style={{marginLeft:'15px'}}>
                    <Nav.Link href="#home" style={{fontSize:'20px',color:'white'}}>Home</Nav.Link>
                    <Nav.Link href="#features" style={{fontSize:'20px',color:'white'}}>Features</Nav.Link>
                    <Nav.Link href="#features" style={{fontSize:'20px',color:'white'}}>Document</Nav.Link>
                </Nav>
                <Avatar icon={<UserOutlined />} style={{width:'40px',height:'40px',marginRight:'20px'}}/>
                
                <Button variant="light" style={{marginRight:'-100px'}} onClick={() => {
                    // Add transfer logics
                    window.location.href="../DesignPage/Home/app.js"
                    }}>
                    Log In
                </Button>
                
                    
                
                
            </Container>
        </Navbar>

        <Content>
            <Row justify="center" style={{backgroundColor:'white', paddingTop:'20px'}}>
                <Col style={{backgroundColor:'white', textAlign:'center'}}>
                    <h4>Congratulations, You Have Your Own NFT Badge Now!</h4>
                </Col>
            </Row>

            <Row justify="start">
                <Col offset={5} span={8} style={{marginTop:'50px'}}>
                    <img alt=' ' src={badge}/>
                    <Divider >User Information</Divider>
                    <Space wrap size={15}>
                        <Avatar size={40} style={{backgroundColor: '#87d068',}}icon={<UserOutlined />}/>
                        <h5>{name}</h5>    
                    </Space> 
                     
                </Col>


                <Col span={6} offset={2} >
                    <Card title="Share Crdential" bordered={true} style={{width: 320, margin:'10px 10px'}}>
                        <p>Show this crdential on your social network</p>
                        <Space size={25} wrap>
                            <Avatar shape='square' size={50} style={{backgroundColor:'blue'}} icon={<FacebookFilled />} />
                            <Avatar shape='square' size={50} style={{backgroundColor:'#00BFFF'}} icon={<TwitterOutlined />}>U</Avatar>
                            <Avatar shape='square' size={50} style={{backgroundColor:'#1E90FF'}} icon={<LinkedinFilled />}>USER</Avatar>
                        </Space>
                    </Card>
                    
                    <Card title="Credential Verification" bordered={true} style={{width: 320, margin:'10px 10px'}}> 
                        <p><CheckCircleTwoTone style={{fontSize:'20px'}}/> This Credential is from <b>{issuer}</b></p>
                        <p><WalletTwoTone twoToneColor="#eb2f96" style={{fontSize:'20px'}}/> Blockchain ID: <b>{id}</b></p>
                    </Card>

                    <Card title="More About Issuer" bordered={true} style={{width: 320, margin:'10px 10px'}}>
                        <a href='#' style={{textDecoration:'none'}}><LinkOutlined style={{fontSize:'20px'}}/> View Issuer Website</a>
                        <Divider/>
                    </Card>

                </Col>
                
            </Row>

        </Content>
        
        <Footer style={{textAlign: 'center',backgroundColor:'wheat'}}>
            Ant Design ©2023 Created by Ant UED
        </Footer>
    </Layout>
    )  
}

export default Display;