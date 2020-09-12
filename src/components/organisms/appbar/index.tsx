import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'src/assets/images';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';
import { saveCategoryByWord } from 'src/shared/store/categories/actions';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchAppBar from 'src/components/molecules/search-bar';
import Link from 'src/components/atoms/link';
import Image from 'src/components/atoms/image';

import { BadgeStyled } from './styles';
import { saveProductByWord } from 'src/shared/store/products/actions';

interface AppbarProps {
  onClick: (orientation: string, type: string) => void;
  itemsAtCart: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarMenu = ({ onClick, itemsAtCart }: AppbarProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const path = window.location.pathname;

  const searchByWord = (word: string) => {
    dispatch(saveCategoryByWord(word));
    dispatch(saveProductByWord(word));
  };

  return (
    <Grid container className={classes.root}>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: 'black' }}>
          <Grid item md={3} xs={12}>
            <div style={{ display: 'flex' }}>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={() => onClick('left', 'menu')}
              >
                <MenuIcon />
              </IconButton>
              <div className='logo-wrapper'>
                <Link path='/'>
                  <Image src={Logo} alt='logo' height={50} width={100} />
                </Link>
              </div>
            </div>
          </Grid>
          {path !== '/category/:id/products/:id' && (
            <Grid item md={6} xs={12}>
              <SearchAppBar word={(value) => searchByWord(value)} />
            </Grid>
          )}
          <Grid item md={3} xs={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <IconButton
                edge='end'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={() => onClick('right', 'shopping cart')}
              >
                <BadgeStyled badgeContent={itemsAtCart}>
                  <ShoppingCartIcon />
                </BadgeStyled>
              </IconButton>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default AppBarMenu;
