import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Examples = props => {
  const { example_1, example_2, example_3, example_4, example_5 } = props.props;
  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <Typography variant="title" component="h3" gutterBottom>
        Examples
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText primary={example_1 != '' ? example_1 : 'example 1'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={example_2 != '' ? example_2 : 'example 2'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={example_3 != '' ? example_3 : 'example 3'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={example_4 != '' ? example_4 : 'example 4'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={example_5 != '' ? example_5 : 'example 5'} />
        </ListItem>
      </List>
    </div>
  );
};

export default Examples;
