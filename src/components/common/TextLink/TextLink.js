import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import join from 'lodash/join';

import withStyles from '@material-ui/core/styles/withStyles';


const styles = ({ spacing, palette, breakpoints }) => ({
    link: {
        color: palette.primary.dark,
        textDecoration: 'none',
        '&.with-right-margin': {
            marginRight: spacing.unit * 0.75
        },
        '&.with-left-margin': {
            marginLeft: spacing.unit * 0.75
        },
        [breakpoints.up('xl')]: {
            '&.with-right-margin': {
                marginRight: spacing.unit * 2
            },
            '&.with-left-margin': {
                marginLeft: spacing.unit * 2
            },
        }
    }
});

const TextLink = props => {
    const { classes } = props;
    const classNames = [classes.link];
    if (props.className) {
        classNames.push(props.className);
    }
    if (props.withRightMargin) {
        classNames.push('with-right-margin');
    }
    if (props.withLeftMargin) {
        classNames.push('with-left-margin');
    }
    return (
        <a
            {...omit(props, [
                'classes',
                'className',
                'withRightMargin',
                'withLeftMargin'
            ])}
            className={join(classNames, ' ')}
        >
            {props.children}
        </a>
    );
};

TextLink.defaultProps = {
    withRightMargin: true,
    withLeftMargin: true
};

TextLink.propTypes = {
    classes: PropTypes.object.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    withRightMargin: PropTypes.bool,
    withLeftMargin: PropTypes.bool
};

export default withStyles(styles)(TextLink);
