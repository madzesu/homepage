import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing }) => ({
    container: {
        marginTop: spacing.unit * 0.5,
        marginLeft: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    }
});

const NavLinks = props => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
};

NavLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default withStyles(styles)(NavLinks);
