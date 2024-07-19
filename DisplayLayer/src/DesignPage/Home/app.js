import { Layout, theme} from 'antd';
import React, { useRef } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import './index.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import {UploadSection} from 'polotno/side-panel';
import { getImageSize } from 'polotno/utils/image';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { observer } from 'mobx-react-lite';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';
import { SidePanel } from 'polotno/side-panel';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { SectionTab } from 'polotno/side-panel';
import { useNavigate } from 'react-router';

const store = createStore({
    key: 'kqZZThZdDVuiPZzWG-82',
    showCredit: true,
});



store.setSize(500, 500);
const page = store.addPage();

const MyColorPicker = observer(({ store, element, elements }) => {
    // store - main polotno store object
    // elements - array of selected elements. The same as store.selectedElements
    // element - first selected element. The same as store.selectedElements[0]
    return (
      <div>
        <input
          type="color"
          value={element.fill}
          onChange={(e) => {
            element.set({
              fill: e.target.value,
            });
          }}
        />
      </div>
    );
});

const TextTextFontSize = () => null;

const TextAlertButton = observer(({ store, element, elements }) => {
  return (
    <Button
      onClick={() => {
        alert('Hello!');
      }}
    >
      Alert
    </Button>
  );
});


const History = () => null;
  
page.set({
    background: './images/back.jpg',
    bleed: 10,
});
  
const PhotosPanel = observer(({ store }) => {
    const [images, setImages] = React.useState([]);
    async function loadImages() {
      // here we should implement your own API requests
      setImages([]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // for demo images are hard coded
      // in real app here will be something like JSON structure
      setImages([
        {url:require("./badges/r1.png")},{url:require("./badges/r2.png")},
        {url:require("./badges/r3.png")},{url:require("./badges/r4.png")},
        {url:require("./badges/r5.png")},{url:require("./badges/r6.png")},
        {url:require("./badges/r7.png")},{url:require("./badges/r8.png")},
        {url:require("./badges/r9.png")},{url:require("./badges/r10.png")},
        {url:require("./badges/r11.png")},{url:require("./badges/r12.png")},
        {url:require("./badges/r13.png")},{url:require("./badges/r14.png")},
        {url:require("./badges/r15.png")},{url:require("./badges/r16.png")},
        {url:require("./badges/r17.png")},{url:require("./badges/r18.png")},
        {url:require("./badges/r19.png")},{url:require("./badges/r20.png")},
        {url:require("./badges/r21.png")},{url:require("./badges/r22.png")},
        {url:require("./badges/r23.png")},{url:require("./badges/r24.png")},
        {url:require("./badges/r25.png")},{url:require("./badges/r26.png")},
        {url:require("./badges/r27.png")},{url:require("./badges/r28.png")},
      ]);
    }
  
    React.useEffect(() => {
      loadImages();
    }, []);
  
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* you can create yur own custom component here */}
        {/* but we will use built-in grid component */}
        <ImagesGrid
          images={images}
          // images={images}
          getPreview={(image) => image.url}
          onSelect={async (image, pos,element) => {
            console.log(image.url)
            const { width, height } = await getImageSize(image.url);
            store.activePage.addElement({
              type: 'image',
              src: image.url,
              width,
              height,
              // if position is available, show image on dropped place
              // or just show it in the center
              x: pos ? pos.x : store.width / 2 - width / 2,
              y: pos ? pos.y : store.width / 2 - width / 2,
            });
          }}
          rowsNumber={2}
          isLoading={!images.length}
          loadMore={false}
        />

      </div>
    );
});

const CustomPhotos = {
    name: 'templates',
    Tab: (props) => (
      <SectionTab name="Templates" {...props}>
        <MdPhotoLibrary />
      </SectionTab>
    ),
    // we need observer to update component automatically on any store changes
    Panel: PhotosPanel,
  };

const IconPanel = observer(({ store }) => {
    const [images, setImages] = React.useState([]);
    async function loadImages() {
      // here we should implement your own API requests
      setImages([]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // for demo images are hard coded
      // in real app here will be something like JSON structure
      setImages([
        {url:require("./icons/i1.png")},{url:require("./icons/i2.png")},{url:require("./icons/i3.png")},
        {url:require("./icons/i4.png")},{url:require("./icons/i5.png")},{url:require("./icons/i6.png")},
        {url:require("./icons/i7.png")},{url:require("./icons/i8.png")},{url:require("./icons/i9.png")},
        {url:require("./icons/i10.png")},{url:require("./icons/i11.png")},{url:require("./icons/i12.png")},
        {url:require("./icons/i13.png")},{url:require("./icons/i14.png")},{url:require("./icons/i15.png")},
        {url:require("./icons/i16.png")},{url:require("./icons/i17.png")},{url:require("./icons/i18.png")},
        {url:require("./icons/i19.png")},{url:require("./icons/i20.png")},{url:require("./icons/i21.png")}
      ]);
    }
    React.useEffect(() => {
      loadImages();
    }, []);
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* you can create yur own custom component here */}
        {/* but we will use built-in grid component */}
        <ImagesGrid
          images={images}
          // images={images}
          getPreview={(image) => image.url}
          onSelect={async (image, pos,element) => {
            console.log(image.url)
            // const { width, height } = await getImageSize(image.url);
            const width = 80
            const height = 80
            store.activePage.addElement({
              type: 'image',
              src: image.url,
              width,
              height,
              // if position is available, show image on dropped place
              // or just show it in the center
              x: pos ? pos.x : store.width / 2 - width / 2,
              y: pos ? pos.y : store.width / 2 - width / 2,
            });
          }}
          rowsNumber={3}
          isLoading={!images.length}
          loadMore={false}
        />

      </div>
    );
  });

const CustomIcons = {
    name: 'icons',
    Tab: (props) => (
      <SectionTab name="Icons" {...props}>
        <MdPhotoLibrary />
      </SectionTab>
    ),
    // we need observer to update component automatically on any store changes
    Panel: IconPanel,
};

  
// we will have just two sections
const sections = [CustomPhotos,CustomIcons,UploadSection];
const {Content} = Layout;

const App = () => {
    const {token: { colorBgContainer },} = theme.useToken();
    const inputRef = useRef("Add new Text")
    const navigate = useNavigate()

    const goDisplay = ()=>{
      navigate('/display')
    }
    return (
    <Layout>

        <Navbar bg="primary" variant="dark">
            <Container style={{marginLeft:'60px'}}>
                <Navbar.Brand href="#home">
                    <img alt=' ' src='./icons/blockchain.svg ' width={60} height={60}/> {' '}
                    <h4 style={{display:'inline-block',paddingTop:'10px'}}>NFT Badge Design</h4>
                </Navbar.Brand>
                <Nav className="me-auto" style={{marginLeft:'15px'}}>
                    <Nav.Link href="#home" style={{fontSize:'20px',color:'white'}}>Home</Nav.Link>
                    <Nav.Link href="#features" style={{fontSize:'20px',color:'white'}}>Features</Nav.Link>
                    <Nav.Link href="#features" style={{fontSize:'20px',color:'white'}}>Document</Nav.Link>
                </Nav>
                <Button variant="light" style={{marginRight:'-100px'}} onClick={() => {
                        // Add transfer logics
                        }}>
                        Log In
                </Button>
            </Container>
        </Navbar>
        
        {/* This layout is the main space */}
        <Layout style={{height:'800px'}}> 
            {/* This position is used to place the original sider */}
            <Layout style={{marginTop:'-20px'}}>   
                <Content style={{ paddingTop: 20, marginLeft: -40 , margin: '0px 0',minHeight: 700, background: colorBgContainer,}}>
                    <PolotnoContainer className="polotno-app-container" >
                        <SidePanelWrap>
                            <SidePanel store={store} sections={sections} defaultSection="templates" />
                        </SidePanelWrap>
                        <WorkspaceWrap>
                            <Toolbar style={{marginLeft:'20px'}} downloadButtonEnabled store={store} components={{
                                TextFill: MyColorPicker,
                                TextTextFontSize,
                                TextAlertButton,
                                History,
                            }} />

                           
                            <div style={{width:'250px'}}>
                                <input placeholder="Add new text" ref={inputRef}
                                    style={{padding: '5px',width: '60%',margin: '10px',}}/>
                               
                                <button onClick={() => {
                                    store.activePage.addElement({
                                        x: 150,
                                        y: 170,
                                        fontSize: 25,
                                        type: 'text',
                                        fill: 'black',
                                        text: inputRef.current.value,
                                        width: 200,
                                        });
                                }}>
                                    Add Text
                                </button>

                               
                                
                            </div>
                            
                           
                            <div style={{ width: '500px', height: '500px', top:'90px',left:'200px',position:'absolute'}}>
                                <Workspace store={store} pageControlsEnabled={false} 
                                    backgroundColor='white'
                                />

                                <button style={{margin:'30px 150px'}} onClick={goDisplay}>
                                  Complete design
                                </button>
                            </div>
                            <ZoomButtons store={store} />
                        </WorkspaceWrap>
                    </PolotnoContainer>
                </Content>
            </Layout>

        </Layout>

    </Layout>
    );
    };

export default App;


