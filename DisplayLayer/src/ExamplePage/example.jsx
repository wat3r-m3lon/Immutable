import React, { useState } from 'react';
import './index.css';
import { Layout, theme, Avatar } from 'antd';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Col, Divider, Row, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import InfoBoard from './infoBoard';
import App from "../DesignPage/Home/app";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {CSSTransition} from "react-transition-group";


const { Header, Content, Footer } = Layout;


const ExamplePage = () => {

    const {token: {colorBgContainer }} = theme.useToken();
    const [picindex,setpicindex] = useState(0);

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showMenu, setShowMenu] = useState(false);


    const navigate = useNavigate()
    const goDesign = ()=>{
        navigate('/design')
    }

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
                        }}>
                        Log In
                </Button>
            </Container>
        </Navbar>

        {/* style={{padding: '20px 50px'}} */}
        <Content >

            <div className="site-layout-content"style={{background: colorBgContainer}}>
                <Row justify="center">
                    <Col span={8} style={{textAlign:'center'}} className='info_title'>
                        <h3>Your Certificate Information</h3>
                    </Col>         
                </Row>
                
                {/* This row contains the certifate image and a user information table */}
                <Row style={{marginTop:'20px'}}>
                    <Col span={4} offset={2}>
                        {/* Replace the image here */}
                        {/* border:'1px solid gray */}
                        <div style={{width:'250px', height:'350px',position:'relative'}}>
                            <div style={{position:'absolute',top:'10%',left:'10%'}}>
                                <Image width={200}
                                src={picindex===0?require('./images/certificate.png'):require('./images/example_badge.png')}>
                                </Image>
                            </div>
                        </div>
                        <Divider style={{marginTop:'1px',marginLeft:'20px'}}></Divider>

                        <Row span={5} style={{marginTop:'5px'}}>
                            <img alt=' ' className={picindex===0?'previewPic':''}
                            src={require('./images/certificate.png')} style={{height:'100px',padding:'0px 10px',border:'1px solid gray'}} onClick={()=>{
                                setpicindex(0)
                            }}/>
                            <img alt=' ' className={picindex==1?'previewPic':''}
                            src={require('./images/example_badge.png')} style={{height:'100px',marginLeft:'20px',border:'1px solid gray'}} onClick={()=>{
                                setpicindex(1)
                            }} />
                        </Row>
                        
                        
                    </Col>
                    <Col style={{marginTop:'40px',marginLeft:'60px'}} span={15}>
                        <InfoBoard></InfoBoard>
                        {/* style={{margin:'40px 300px',display:'inline-block'}} */}
                        <Col span={8} style={{margin:'40px 200px',display:'inline-block'}} >
                            {/* <Button variant="secondary" size='lg' style={{marginRight:'80px'}} >Back</Button>{' '} */}

                            <Button style={{width:'300px'}} variant="primary" size='lg' onClick={goDesign}>Confirm, Go to Design Badge</Button>{' '}
                        </Col>  
                    </Col>
                </Row>
                <Row >
                    
                </Row>        

            </div>

        </Content>

        <Footer
            style={{
            textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>
    </Layout>    
    )
}

export default ExamplePage;