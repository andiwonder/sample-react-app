import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Enhancements = props => {
  const {
    enhance1,
    enhance2,
    enhance3,
    enhance4,
    enhance5,
    enhance6,
    enhance7,
    enhance8,
    enhance9,
    enhance10,
    enhance11,
    enhance12,
    enhance13,
    enhance14,
    enhance15
  } = props.props;

  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <Typography variant="title" component="h3" gutterBottom>
        Enhancements
      </Typography>
      <List dense={true} style={{ maxWidth: '100%', marginRight: 0 }}>
        <ListItem>
          <ListItemText primary={enhance1 != '' ? enhance1 : 'enhance 1'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance2 != '' ? enhance2 : 'enhance 2'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance3 != '' ? enhance3 : 'enhance 3'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance4 != '' ? enhance4 : 'enhance 4'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance5 != '' ? enhance5 : 'enhance 5'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance6 != '' ? enhance6 : 'enhance 6'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance7 != '' ? enhance7 : 'enhance 7'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance8 != '' ? enhance8 : 'enhance 8'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance9 != '' ? enhance9 : 'enhance 9'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance10 != '' ? enhance10 : 'enhance 10'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance11 != '' ? enhance11 : 'enhance 11'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance12 != '' ? enhance12 : 'enhance 12'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance13 != '' ? enhance13 : 'enhance 13'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance14 != '' ? enhance14 : 'enhance 14'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={enhance15 != '' ? enhance15 : 'enhance 15'} />
        </ListItem>
      </List>
    </div>
  );
};

export default Enhancements;
