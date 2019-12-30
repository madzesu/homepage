import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import KeyboardBlock from './KeyboardBlock';
import ArrowIcon from './ArrowIcon';


const styles = ({ spacing, palette, breakpoints }) => ({
    controlsTypography: {
        marginBottom: spacing.unit * 2,
        textAlign: 'center'
    },
    keysContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    separatorTypography: {
        fontSize: 16,
        [breakpoints.up('xs')]: {
            margin: `0px ${spacing.unit * 2.5}px`
        },
        [breakpoints.up('sm')]: {
            margin: `0px ${spacing.unit * 3}px`
        }
    },
    noMobileSupportText: {
        textAlign: 'center',
        marginTop: spacing.unit * 2,
        color: palette.info.main
    }
});

const getArrowKeys = () =>
    map(['up', 'left', 'down', 'right'], direction => (
        <ArrowIcon direction={direction} />
    ));

const Controls = props => {
    const { classes } = props;
    return (
        <Fragment>
            <Typography
                variant="display1"
                className={classes.controlsTypography}
            >
                Controls
            </Typography>
            <div className={classes.keysContainer}>
                <KeyboardBlock keys={['W', 'A', 'S', 'D']} />
                <Typography
                    variant="caption"
                    className={classes.separatorTypography}
                >
                    OR
                </Typography>
                <KeyboardBlock keys={getArrowKeys()} />
            </div>
            <Typography className={classes.noMobileSupportText}>
                Note: I haven't written support for mobile devices.
            </Typography>
        </Fragment>
    );
};

Controls.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Controls);
