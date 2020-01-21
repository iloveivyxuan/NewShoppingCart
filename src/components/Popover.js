import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography, Button } from '@material-ui/core';
import { SignOut } from './SignIn';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(1),
    },
}));

// Props
const SimplePopover = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="secondary" onClick={handleClick} disableElevation>
                {props.children}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}><Button onClick={SignOut}>Sign out</Button></Typography>
            </Popover>
        </div>
    );
}

export default SimplePopover
