import { Layout, theme, Modal, Button, message} from 'antd';
import React, { useRef, useState } from 'react';
import './index.css';
import { PictureFilled, StarFilled } from '@ant-design/icons';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { UploadSection } from 'polotno/side-panel';
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
import PageIllustration from '../../../partials/PageIllustration';
import { createSearchParams } from 'react-router-dom';
import AuthService from "../../../services/auth.service";
import i1 from './icons/i1.png';
import i2 from './icons/i2.png';
import i3 from './icons/i3.png';
import i4 from './icons/i4.png';
import i5 from './icons/i5.png';
import i6 from './icons/i6.png';
import i7 from './icons/i7.png';
import i8 from './icons/i8.png';
import i9 from './icons/i9.png';
import i10 from './icons/i10.png';
import i11 from './icons/i11.png';
import i12 from './icons/i12.png';
import i13 from './icons/i13.png';
import i14 from './icons/i14.png';
import i15 from './icons/i15.png';
import i16 from './icons/i16.png';
import i17 from './icons/i17.png';
import i18 from './icons/i18.png';
import i19 from './icons/i19.png';
import i20 from './icons/i20.png';
import i21 from './icons/i21.png';
import r1 from './badges/r1.png';
import r2 from './badges/r2.png';
import r3 from './badges/r3.png';
import r4 from './badges/r4.png';
import r5 from './badges/r5.png';
import r6 from './badges/r6.png';
import r7 from './badges/r7.png';
import r8 from './badges/r8.png';
import r9 from './badges/r9.png';
import r10 from './badges/r10.png';
import r11 from './badges/r11.png';
import r12 from './badges/r12.png';
import r13 from './badges/r13.png';
import r14 from './badges/r14.png';
import r15 from './badges/r15.png';
import r16 from './badges/r16.png';
import r17 from './badges/r17.png';
import r18 from './badges/r18.png';
import r19 from './badges/r19.png';
import r20 from './badges/r20.png';
import r21 from './badges/r21.png';
import r22 from './badges/r22.png';
import r23 from './badges/r23.png';
import r24 from './badges/r24.png';
import r25 from './badges/r25.png';
import r26 from './badges/r26.png';
import r27 from './badges/r27.png';
import r28 from './badges/r28.png';
import Footer from "../../../partials/Footer";



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
            { url: r1 }, { url: r2 }, { url: r3 },
            { url: r4 }, { url: r5 }, { url: r6 },
            { url: r7 }, { url: r8 }, { url: r9 },
            { url: r10 }, { url: r11 }, { url: r12 },
            { url: r13 }, { url: r14 }, { url: r15 },
            { url: r16 }, { url: r17 }, { url: r18 },
            { url: r19 }, { url: r20 }, { url: r21 },
            { url: r22 }, { url: r23 }, { url: r24 },
            { url: r25 }, { url: r26 }, { url: r27 },
            { url: r28 }
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
        <PictureFilled />
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
      setImages([
          { url: i1 },
          { url: i2 },
          { url: i3 },
          { url: i4 },
          { url: i5 },
          { url: i6 },
          { url: i7 },
          { url: i8 },
          { url: i9 },
          { url: i10 },
          { url: i11 },
          { url: i12 },
          { url: i13 },
          { url: i14 },
          { url: i15 },
          { url: i16 },
          { url: i17 },
          { url: i18 },
          { url: i19 },
          { url: i20 },
          { url: i21 },
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
        <StarFilled />
      </SectionTab>
    ),
    // we need observer to update component automatically on any store changes
    Panel: IconPanel,
};

  
// we will have just two sections
const sections = [CustomPhotos, CustomIcons, UploadSection];
const {Content} = Layout;

const App = () => {
    const {token: { colorBgContainer },} = theme.useToken();
    const inputRef = useRef("Add new Text");

    const currentUser = AuthService.getCurrentUser();

    const navigate = useNavigate()

    const URL = "http://localhost:8080/badges/" + currentUser.id;

    const storeBadge = async (picture)=>{
      const pic = await store.toDataURL({ mimeType: 'image/jpg' });
      console.log(typeof pic);
      navigate({
        pathname: '/display',
        search: createSearchParams({
          picture: pic
        }).toString()
      })

      // Upload the badge to the database
      // axios.put(URL, {
      //   "id": currentUser.id,
      //   "image": pic
      // }).then(response => {
      //   // prompt the user that succeed
      // }).catch(error => {
      //   console.log(error);
      // })

    };

    // Deal with the modal window
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    // Message prompt to add at least one element in the canvas

    const warning = () => {
      messageApi.open({
        type: 'error',
        content: 'Please Design Your Badge!',
      });
    };

    

    return (
     
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            {/*<Header />*/}

            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
                {/*Empty line*/}
                <p><br/><br/><br/><br/></p>

                {/* This layout is the main space */}
                <Layout style={{height:'800px'}}>
                    {/* This position is used to place the original sider */}
                    <Layout style={{marginTop:'-20px'}}>
                        {/* contextHolder is the message prompt to add at least one element to the canvas while submitting  */}
                        {contextHolder} 
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
                                    }} />

                                    {/* This div is used to add the text to canvas  */}
                                    <div style={{width:'250px'}}>
                                        <input placeholder="Add new text" ref={inputRef}
                                               style={{padding: '5px',width: '60%',margin: '10px',border:"1px solid black", display:'inline-block'}}/>
                                        <Button style={{border:'1px solid blue', display:"inline", marginLeft:'10px'}} onClick={() => {
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
                                        </Button>
                                    </div>


                                    <div style={{ width: '500px', height: '500px', top:'120px',left:'250px',position:'absolute',marginLeft:'22%'}}>
                                        {/* This is the canvas where design the badge */}
                                        <Workspace store={store} pageControlsEnabled={false} backgroundColor='white'/>  
                                        <Button style={{margin:'30px 150px'}} onClick={()=>{
                                          let number = store.activePage.children.length;
                                          // If the canvas is empty, then user cannot jump to next page
                                          (number>0)?showModal(): warning();
                                        }}>
                                          Add to My Badges
                                        </Button>

                                        <Modal title="Confirmation" open={isModalOpen} onOk={storeBadge} onCancel={handleCancel} okType='danger'>
                                            <p>Have You Completed the design?</p>
                                        </Modal>

                                    </div>
                                    <ZoomButtons store={store} />
                                </WorkspaceWrap>
                            </PolotnoContainer>
                        </Content>
                    </Layout>
                </Layout>
            </main>
            <Footer />
        </div>
    );
    };

export default App;


