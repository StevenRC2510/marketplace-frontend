import React from 'react';
import { useSelector } from 'react-redux';

import { getCategoriesList } from 'src/shared/store/categories/selectors';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Label from 'src/components/atoms/label';
import Link from 'src/components/atoms/link';

import { MenuContainer } from './styles';

const Menu = () => {
  const { categories } = useSelector(getCategoriesList);
  return (
    <MenuContainer>
      <div className='spacing'>
        <Label bold>Buy for category</Label>
      </div>
      <List>
        {categories.map(({ category_name }, index) => (
          <Link
            path={`/category/${category_name}`}
            key={`${category_name}-${index}`}
          >
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={category_name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <div className='spacing'>
          <Label bold>Help and settings</Label>
        </div>
        {['Help', 'Account', 'Comming Soon'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MenuContainer>
  );
};

export default Menu;
