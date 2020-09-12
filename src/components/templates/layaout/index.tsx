import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'src/routes';
import AppBarMenu from 'src/components/organisms/appbar';
import SideBar from 'src/components/organisms/sidebar';
import ShoppingCart from 'src/components/organisms/shopping-cart';
import Menu from 'src/components/organisms/menu';
import Footer from 'src/components/organisms/footer';
import { getShoppingCart } from 'src/shared/store/shopping-cart/selectors';
import { PageContainer } from './styles';

export type Drawer = 'bottom' | 'left' | 'right' | 'top' | undefined;

const Layaout = () => {
  const { shoppinCart } = useSelector(getShoppingCart);
  const [toogleSidebar, setToogleSidebar] = useState({
    orientation: 'left',
    type: '',
    open: false,
  });

  const toggleDrawer = (type: string, orientation: string) => {
    setToogleSidebar({
      ...toogleSidebar,
      orientation,
      type,
      open: !toogleSidebar.open,
    });
  };

  return (
    <Router>
      <PageContainer className='page-container'>
        <div className='content-wrap'>
          <AppBarMenu
            onClick={(orientation, type) => toggleDrawer(type, orientation)}
            itemsAtCart={shoppinCart.length}
          />
          <SideBar
            orientation={toogleSidebar.orientation as Drawer}
            open={toogleSidebar.open}
            onClose={() => setToogleSidebar({ ...toogleSidebar, open: false })}
          >
            {toogleSidebar.type === 'menu' ? <Menu /> : <ShoppingCart />}
          </SideBar>
          <main>
            <AppRouter />
          </main>
        </div>
        <Footer />
      </PageContainer>
    </Router>
  );
};

export default Layaout;
