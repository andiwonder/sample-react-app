import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material UI componenets
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    maxWidth: 345,
    paddingTop: '1em',
    borderRadius: '4px'
  },
  media: {
    height: 0,
    width: '55%',
    display: 'block',
    margin: '0 auto',
    paddingTop: '60.25%' // 16:9
  },
  content: {
    padding: '16px 10px 16px 10px !important'
  },
  teamName: {
    letterSpacing: '.5px',
    fontWeight: 700
  },
  root: {
    marginBottom: '4em'
  }
};

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      policies: [
        {
          title: 'General Liability',
          desc: 'Shields you from third-party claims such as bodily injury & property damage',
          code: 1116,
          code_abbr: 'gl'
        },
        {
          title: 'Business Owner',
          desc: 'General Liability plus commercial property and business interruption',
          code: 1111,
          code_abbr: 'bop'
        },
        {
          title: 'Directors and Officers',
          desc: 'Leadership protection in the event of allegations of wrongdoing',
          code: 1114,
          code_abbr: 'do'
        },
        {
          title: 'Errors and Omission',
          desc: 'Covers damages induced by the professional services you provide',
          code: 1115,
          code_abbr: 'eo'
        },
        {
          title: 'Workers Compensation',
          desc: 'Insurance for you & your employees against work related accidents',
          code: 1117,
          code_abbr: 'wc'
        },
        {
          title: 'Cyber Liability',
          desc: 'Response cost and claims arising out of a data breach',
          code: 1113,
          code_abbr: 'cy'
        },
        {
          title: 'Commercial Vehicle',
          desc: 'Covers cars & trucks, used in conducting your business',
          code: 1112,
          code_abbr: 'cv'
        },
        {
          title: 'Ask Robin',
          desc: 'Your personal roboadvisor, for coverage recommendations',
          code: 'coach',
          code_abbr: 'coach'
        }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    const policyCards = this.state.policies.map((policy, index) => {
      return (
        <Grid key={index} item md={4} style={{ padding: '0 4em', marginBottom: '1em' }}>
          <Card
            className={classes.card}
            component={Link}
            to={'/policy/' + policy.code}
            style={{ textDecoration: 'none' }}
          >
            <CardMedia
              className={classes.media}
              image={`/images/icons/${policy.code_abbr}.png`}
              title="Contemplative Reptile"
              style={{ width: '24%', paddingTop: '24.25%' }}
            />
            <CardContent className={classes.content}>
              <Typography variant="title" component="h2" style={{ marginBottom: '.5em' }}>
                {policy.title}
              </Typography>
              <Typography gutterBottom component="h4" style={{ marginBottom: '.5em' }}>
                {`${policy.desc}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });

    return (
      <div className={classes.root}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '5em',
            marginBottom: '5em'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Typography color="primary" gutterBottom variant="title" align="center" style={{ marginBottom: '1em' }}>
              Quickly get an estimate
            </Typography>
            <Button variant="outlined" color="secondary" className={classes.button} component={Link} to={'/quote'}>
              Get Quote Estimate
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginLeft: '15%' }}>
            <Typography color="primary" gutterBottom variant="title" align="center" style={{ marginBottom: '1em' }}>
              Not sure what you need ?
            </Typography>
            <Button variant="outlined" color="secondary" className={classes.button} component={Link} to={'/coach'}>
              Ask Robin
            </Button>
          </div>
        </div>
        <Typography variant="display1" align="center" color="primary" style={{ margin: '2em 0 1em 0' }}>
          Select a policy
        </Typography>
        <Typography variant="headline" align="center">
          Commercial Insurance that keeps you rolling.
        </Typography>
        <Typography variant="subheading" gutterBottom align="center" style={{ marginBottom: '4em' }}>
          revolving around your venture
        </Typography>
        <Grid container spacing={24}>
          {policyCards}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);
