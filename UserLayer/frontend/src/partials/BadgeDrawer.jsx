import React, { useState } from 'react';
import { Button, Drawer, Empty } from 'antd';

const BadgeDrawer = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="default" onClick={showDrawer}>
        <h3 className='text-sky-600'>
            My Badges
        </h3>
      </Button>
      <Drawer title="My Badges" placement="right" onClose={onClose} open={open}>
        <Empty description={
          <h1> No Badges</h1>
        } />
      </Drawer>
    </>
  );
};
export default BadgeDrawer;