import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function SideList(props) {
  const { classes, selectPolicy, currentPolicy, add_ons, essentials } = props;

  const getCode = title => {
    const policies = {
      Business_Owners_Policy: 'BOP',
      Commercial_Vehicle: 'CV',
      Cyber_Liability: 'CY',
      Directors_and_Officer: 'DO',
      Errors_and_Omission: 'EO',
      General_Liability: 'GL',
      Workers_Compensation: 'WC',
      Key_Man: 'KY'
    };
    return policies[title.replace(/ /g, '_')];
  };

  const essentials_items = essentials.split(',').map((policy, index) => {
    return (
      <ListItem button key={index} onClick={() => selectPolicy(getCode(policy))} style={{ marginLeft: 0 }}>
        <Button
          size="small"
          variant="outlined"
          className={classes.button}
          color={currentPolicy == policy ? 'primary' : 'default'}
        >
          {policy}
        </Button>
      </ListItem>
    );
  });

  const add_ons_items = add_ons.split(',').map((policy, index) => {
    return (
      <ListItem key={index} onClick={() => selectPolicy(getCode(policy))} style={{ marginLeft: 0 }}>
        <Button
          size="small"
          variant="outlined"
          color={currentPolicy == policy ? 'primary' : 'default'}
          className={classes.button}
        >
          {policy}
        </Button>
      </ListItem>
    );
  });

  return (
    <div className={classes.root} style={{ width: '240px' }}>
      <List component="nav" style={{ background: '#ecedf1' }}>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Essential" />
        </ListItem>
        {essentials_items}
      </List>
      <Divider />
      <List component="nav" style={{ background: '#ecedf1' }}>
        <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Add-ons" />
        </ListItem>
        {add_ons_items}
      </List>
    </div>
  );
}

SideList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideList);
