import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Exclusions = props => {
  const {
    exclusion1,
    exclusion2,
    exclusion3,
    exclusion4,
    exclusion5,
    exclusion6,
    exclusion7,
    exclusion8,
    exclusion9,
    exclusion10,
    exclusion11,
    exclusion12,
    exclusion13,
    exclusion14,
    exclusion15
  } = props.props;

  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <Typography variant="title" component="h3" gutterBottom>
        Exlcusions
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText primary={exclusion1 != '' ? exclusion1 : 'exclusion 1'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion2 != '' ? exclusion2 : 'exclusion 2'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion3 != '' ? exclusion3 : 'exclusion 3'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion4 != '' ? exclusion4 : 'exclusion 4'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion5 != '' ? exclusion5 : 'exclusion 5'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion6 != '' ? exclusion6 : 'exclusion 6'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion7 != '' ? exclusion7 : 'exclusion 7'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion8 != '' ? exclusion8 : 'exclusion 8'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion9 != '' ? exclusion9 : 'exclusion 9'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion10 != '' ? exclusion10 : 'exclusion 10'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion11 != '' ? exclusion11 : 'exclusion 11'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion12 != '' ? exclusion12 : 'exclusion 12'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion13 != '' ? exclusion13 : 'exclusion 13'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion14 != '' ? exclusion14 : 'exclusion 14'} />
        </ListItem>
        <ListItem>
          <ListItemText primary={exclusion15 != '' ? exclusion15 : 'exclusion 15'} />
        </ListItem>
      </List>
    </div>
  );
};

export default Exclusions;
