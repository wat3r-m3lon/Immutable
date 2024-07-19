import React, { useState } from 'react';
import './index.css';
import { Layout, Avatar,Space } from 'antd';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { Col, Divider, Row, Card } from 'antd';
import { UserOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled, CheckCircleTwoTone, WalletTwoTone,LinkOutlined } from '@ant-design/icons';
import { Link, useSearchParams } from 'react-router-dom';
const { Content, Footer } = Layout;
import badge1 from "./images/example_badge.png";
import PageIllustration from '../../partials/PageIllustration';
import { EmailShareButton, FacebookShareButton,EmailIcon,FacebookIcon } from "react-share";
import usePageTitle from '../../hooks/usePageTitle';

const Display = () => {
    usePageTitle("Badge Display"); 

    const [badge,setbadge] = useState(badge1)
    const [issuer, setissuer] = useState('A valid issuer')
    const [id, setid] = useState('c34bed')
    const [name, setname] = useState('user name')

    const [searchparams] = useSearchParams();
    // console.log(searchparams.get("picture"));
    // console.log("The type of the pic")
    

    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            {/*<Header />*/}

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>

                {/*Example line*/}
                <p><br/><br/><br/></p>

                <Content>
                    <Row justify="center" style={{backgroundColor:'white', paddingTop:'20px'}}>
                        <Col style={{backgroundColor:'white', textAlign:'center'}}>
                            <h4>Congratulations, You Have Your Own NFT Badge Now!</h4>
                        </Col>
                    </Row>

                    <Row justify="start">
                        <Col offset={5} span={8} style={{marginTop:'50px'}}>
                            {/* <img alt=' ' src={badge}/> */}
                            <img alt=' ' src={searchparams.get("picture")}/>
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
                                    <FacebookShareButton 
                                        url={"https://github.com/perspicacious-slinki/Immutable2023s1ANUTechlauncher/tree/main"}
                                        quote='This is my badge!'
                                        hashtag='#NFT2.0'
                                    >
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                   
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


            </main>

            {/*<Banner />*/}

            <Footer />
        </div>



    )  
}

export default Display;