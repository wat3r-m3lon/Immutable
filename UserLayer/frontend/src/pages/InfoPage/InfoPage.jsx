import React, { useState } from 'react';
import './index.css';
import { Layout, theme, Descriptions, Button, Modal } from 'antd';
import { Col, Divider, Row, Image } from 'antd';

import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import PageIllustration from '../../partials/PageIllustration';
import p1 from './images/certificate.png';
import p2 from './images/example_badge.png';
import usePageTitle from '../../hooks/usePageTitle';
import Footer from "../../partials/Footer";

const {Content} = Layout;

const InfoPage = () => {
    usePageTitle("Info Page"); 

    const {token: {colorBgContainer }} = theme.useToken();
    const [picindex,setpicindex] = useState(0);

    const [certificatePic, setcertificatePic] = useState(p1)


    const navigate = useNavigate()
    const goDesign = ()=>{
        navigate('/badge_design')
    }

    // Deal with the modal window
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        goDesign();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(

    <div className="flex flex-col min-h-screen overflow-hidden">

        <main className="grow">
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                <PageIllustration />
            </div>

            <p><br/><br/><br/></p>

            <Content >

                <div className="site-layout-content" style={{background: colorBgContainer}}>
                    <Row justify="center" style={{marginTop:'20px'}}>
                        <Col span={8} style={{textAlign:'center'}}>
                            <h3 style={{fontSize:'18px'}}>Your Certificate Information</h3>
                        </Col>         
                    </Row>
                    
                    {/* This row contains the certifate image and a user information table */}
                   <Row style={{marginTop:'20px'}}>
                        <Col span={4} offset={2}>
                            <div style={{width:'250px', height:'350px',position:'relative',border:'1px solid black'}}>
                                <div style={{position:'absolute',top:'10%',left:'10%'}}>
                                    <Image width={200} src={picindex===0?p1:p2}/>
                                </div>
                            </div>
                            <Divider style={{marginTop:'1px',marginLeft:'20px'}}/>
                            <Row span={5} style={{marginTop:'5px'}}>
                                <img alt=' ' className={picindex===0?'previewPic':''}
                                src={p1} style={{height:'100px',padding:'0px 10px',border:'1px solid gray'}} onClick={()=>{
                                    setpicindex(0)
                                }}/>
                                <img alt=' ' className={picindex==1?'previewPic':''}
                                src={p2} style={{height:'100px',marginLeft:'20px',border:'1px solid gray'}} onClick={()=>{
                                    setpicindex(1)
                                }} />
                            </Row>

                        </Col>

                        {/* TODO: need to update these info */}
                        <Col span={15} offset={2} style={{marginTop:'20px',marginLeft:'60px'}}>
                                <Descriptions title="User Info" bordered>
                                    <Descriptions.Item label="Holder Name">Jeremy Milson</Descriptions.Item>
                                    <Descriptions.Item label="Education Type">University</Descriptions.Item>
                                    <Descriptions.Item label="Qualification Name">Test</Descriptions.Item>
                                    <Descriptions.Item label="Request time">2023-05-14 18:00:00</Descriptions.Item>
                                    <Descriptions.Item label="Description" span={2}>
                                    This is my registeration information
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Contact Email" span={3}>
                                    you@mail.com
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Comments">None</Descriptions.Item>
                                    <Descriptions.Item label="Status">Verified</Descriptions.Item>
                                    {/* <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item> */}
                                </Descriptions>
                            
                                {/* <Button style={{width:'300px'}} variant="primary" size='lg' onClick={goDesign}>Confirm, Go to Design Badge</Button>{' '} */}
                                <Col span={6} offset={7} style={{marginTop:'40px'}}>
                                    <Button type="primary" style={{color:'white',backgroundColor:'#1E90FF'}} onClick={showModal}>Confirm, Go to Design Badge</Button>
                                    <Modal title="Confirmation" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                        <p>Is Your Information Correct?</p>
                                    </Modal>
                                </Col>
                                
                        </Col>


                   </Row>
                         

                </div>

            </Content>

        </main>

            {/* <Footer
                style={{
                textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer> */}
        <Footer />
    </div>
       
    )
}

export default InfoPage;