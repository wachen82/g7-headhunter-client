import { ClickAwayListener, Grow, MenuList, Paper, Popper } from '@mui/material';
import theme from '../../../../theme';
import { MenuLink } from './MenuLink';
import { routes } from '../../../../routes/routesMap';
import React from 'react';

interface Props {
    open: boolean;
    accountUrl: string;
    handleListKeyDown: (event: React.KeyboardEvent) => void;
    handleLogout: () => {};
    anchorEl: HTMLButtonElement | null;
    handleClose: (event: Event | React.SyntheticEvent) => void;
}

export const MenuPopper = ({ open, accountUrl, anchorEl, handleClose, handleListKeyDown, handleLogout }: Props) => {
    return (
        <Popper
            open={open}
            anchorEl={anchorEl}
            placement='bottom-start'
            transition
            disablePortal
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom-start'
                                ? 'center top'
                                : 'center bottom',
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id='composition-menu'
                                aria-labelledby='composition-button'
                                onKeyDown={handleListKeyDown}
                                sx={{
                                    backgroundColor:
                                        theme.palette.grey['800'],
                                    width: '260px',
                                }}
                            >
                                <MenuLink
                                    handleClose={handleClose}
                                    text={'Konto'}
                                    url={accountUrl}
                                />
                                <MenuLink
                                    onClick={handleLogout}
                                    handleClose={handleClose}
                                    text={'Wyloguj'}
                                    url={routes.home}
                                />
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};
