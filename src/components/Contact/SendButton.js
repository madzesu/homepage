import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


const styles = ({ palette, spacing }) => ({
    submitButtonRoot: {
        margin: 'auto',
        color: palette.text.light,
        fontSize: 16,
        padding: `${spacing.unit * 1.5}px ${spacing.unit * 3}px`
    },
    submitButtonLabel: {
        paddingTop: 2,
        minWidth: spacing.unit * 25
    },
    circularProgress: {
        position: 'absolute',
    },
});

const SendButton = props => {
    const { classes } = props;

    return (
        <div className={classes.wrapper}>
            <Button
                variant="raised"
                color="primary"
                type="submit"
                size="large"
                disabled={props.loading}
                classes={{
                    root: classes.submitButtonRoot,
                    label: classes.submitButtonLabel
                }}
            >
                {props.loading && (
                    <CircularProgress
                        size={24}
                        className={classes.circularProgress}
                    />
                )}
                {props.children}
            </Button>
        </div>
    );
};

SendButton.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SendButton);