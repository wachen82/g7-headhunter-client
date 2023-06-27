import React from 'react';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { setLogout } from '../../../../state/authSlice';
import { clearPersistedState } from '../../../../app/store';
import axios from 'axios';
import { apiUrl } from '../../../../config/api';
import { ENDPOINTS } from '../../../../services/endpoints/endpoints';
import { MenuButton } from './MenuButton';
import { MenuPopper } from './MenuPopper';

interface Props {
    avatarUrl: string;
    userName: string;
    accountUrl: string;
}

export const MenuBox = ({ avatarUrl, userName, accountUrl }: Props) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        await clearPersistedState();
        await axios(`${apiUrl}${ENDPOINTS.signOut}`, {
            method: 'GET',
            withCredentials: true,
        });
        dispatch(setLogout());
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <MenuButton userName={userName} avatarUrl={avatarUrl} onClick={handleToggle} anchorRef={anchorRef}
                        open={open} />
            <MenuPopper open={open} accountUrl={accountUrl} handleListKeyDown={handleListKeyDown}
                        handleLogout={handleLogout} anchorEl={anchorRef.current} handleClose={handleClose} />
        </>
    );
};
