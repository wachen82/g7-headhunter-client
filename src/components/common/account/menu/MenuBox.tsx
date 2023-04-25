import React from 'react'
import {
    Avatar,
    Button,
    ClickAwayListener,
    Grow,
    MenuList,
    Paper,
    Popper,
    Typography,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import theme from '../../../../theme'
import { MenuLink } from './MenuLink'

interface Props {
    avatarUrl: string
    userName: string
}

export const MenuBox = (props: Props) => {
    const { avatarUrl, userName } = props

    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus()
        }

        prevOpen.current = open
    }, [open])

    return (
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                    width: '260px',
                    height: '80px',
                    borderRadius: 0,
                    backgroundColor: '#1E1E1F',
                    color: '#1E1E1F',
                    '&:hover': {
                        backgroundColor: '#1E1E1F',
                    },
                }}
            >
                <Avatar
                    alt={userName}
                    sx={{ width: 45, height: 45 }}
                    src={avatarUrl}
                />
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        padding: 1,
                        fontSize: '18px',
                        fontWeight: 'light',
                        textTransform: 'capitalize',
                        // lineHeight: '18px',
                    }}
                >
                    {userName}
                    <ArrowDropDownIcon
                        sx={{
                            marginLeft: '12px',
                        }}
                    />
                </Typography>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
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
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{
                                        backgroundColor: '#1E1E1F',
                                        width: '260px',
                                    }}
                                >
                                    <MenuLink
                                        handleClose={handleClose}
                                        text={'Konto'}
                                        url={'#'}
                                    />
                                    <MenuLink
                                        handleClose={handleClose}
                                        text={'Wyloguj'}
                                        url={'#'}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
