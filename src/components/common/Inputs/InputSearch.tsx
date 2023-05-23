import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import theme from '../../../theme';
import React, { useContext, useState } from 'react';
import { SearchValueContext } from '../../../context/SearchValueContext';
import { ButtonMain } from '../Buttons/ButtonMain';
import { buttonStyles } from '../Accordion/BasicAccordion';

export const InputSearch = () => {
    const { searchValue, setSearchValue } = useContext(SearchValueContext);
    const [inputValue, setInputValue] = useState(searchValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchValue(inputValue);
            setInputValue('');
        }
    };
    const handleShowAllResults = () => {
        setSearchValue('');
    };

    return (<>
            <TextField
                variant='outlined'
                size='small'
                placeholder='Szukaj'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search sx={{ color: theme.palette.grey['300'] }} />
                        </InputAdornment>
                    ),
                    sx: {
                        textTransform: 'none',
                        width: '365px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        fontWeight: 'normal',
                        color: theme.palette.grey['300'],
                        bgcolor: theme.palette.grey['800'],
                    },
                }}
            />
            {searchValue && (
                <ButtonMain
                    text='Pokaż wszystkie wyniki'
                    sx={buttonStyles}
                    onClick={handleShowAllResults}
                />)}
        </>
    );
};
