import React, { ReactNode } from 'react';

import Drawer from '@material-ui/core/Drawer';

export type Fruit = 'bottom' | 'left' | 'right' | 'top' | undefined;

interface SideBarProps {
  orientation: Fruit;
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const SideBar = ({ children, orientation, open, onClose }: SideBarProps) => {
  return (
    <div>
      <Drawer anchor={orientation} open={open} onClose={onClose}>
        {children}
      </Drawer>
    </div>
  );
};

export default SideBar;
