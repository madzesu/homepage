import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';


const styles = ({ spacing, palette, breakpoints }) => ({
    container: {
        border: `1px solid ${grey[600]}`,
        borderRadius: 4,
        width: spacing.unit * 3,
        height: spacing.unit * 3,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: `0px 2px 1px 1px ${grey[500]}`,
        color: palette.text.main,
        '&.hidden': {
            opacity: 0
        },
        [breakpoints.up('xs')]: {
            padding: spacing.unit * 0.25,
            width: spacing.unit * 2.5,
            height: spacing.unit * 2.5,
            fontSize: spacing.unit * 1.5,
            margin: spacing.unit * 0.5,
        },
        [breakpoints.up('md')]: {
            padding: spacing.unit * 0.5,
            fontSize: spacing.unit * 1.75
        },
        [breakpoints.up('lg')]: {
            fontSize: spacing.unit * 2
        },
        [breakpoints.up('xl')]: {
            padding: spacing.unit,
            margin: spacing.unit * 0.75,
        }
    }
});

const KeyboardKey = props => {
    const { classes } = props;
    const classNames = [classes.container];
    if (props.hidden) {
        classNames.push('hidden');
    }
    return (
        <div className={join(classNames, ' ')}>
            {props.children}
        </div>
    );
};

KeyboardKey.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

export default withStyles(styles)(KeyboardKey);
