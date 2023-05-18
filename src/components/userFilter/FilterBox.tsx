import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@mui/material';
import { ButtonWithIconAndText } from '../common/Buttons/ButtonWithIconAndText';
import { GradesFilterBox } from './Grades/GradesFilterBox';
import theme from '../../theme';

export const FilterBox = () => {
    return (
        <Container
            sx={{
                padding: '24px 22px 19px 18px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '13px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '22px',
                        lineHeight: '36px',
                        color: theme.palette.text.primary,
                    }}
                >
                    Filtrowanie
                </Typography>
                <Button
                    sx={{
                        padding: '4px 10px',
                        height: '31px',
                        backgroundColor: theme.palette.info.dark,
                        color: theme.palette.text.primary,
                        textTransform: 'none',
                        fontWeight: 'light',
                        fontSize: '14px',
                        lineHeight: '23px',
                    }}
                >
                    Wyczyść wszystkie
                </Button>
            </Box>

            <GradesFilterBox />

            <Box
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: theme.palette.text.primary,
                    }}
                >
                    Preferowane miejsce pracy
                </Typography>
                <Button>Praca zdalna</Button>
                <Button>Praca w biurze</Button>
            </Box>

            <Box
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: theme.palette.text.primary,
                    }}
                >
                    Oczekiwany typ kontraktu
                </Typography>
                <Button>Umowa o pracę</Button>
                <Button>B2B</Button>
                <Button>Umowa zlecenie</Button>
                <Button>Umowa o dzieło</Button>
            </Box>
            <Box
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: theme.palette.text.primary,
                        marginBottom: '3px',
                    }}
                >
                    Oczekiwane wynagrodzenie miesięczne netto
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '23px',
                            color: theme.palette.text.primary,
                            marginRight: '20px',
                        }}
                    >
                        Od
                    </Typography>
                    <TextField
                        id="salary-minimum"
                        label="np. 1000 zł"
                        variant="standard"
                    />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '23px',
                            color: theme.palette.text.primary,
                            margin: '0 20px 0 8px',
                        }}
                    >
                        Do
                    </Typography>

                    <TextField
                        id="salary-maximum"
                        label="np. 10000 zł"
                        variant="standard"
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: theme.palette.text.primary,
                    }}
                >
                    Zgoda na odbycie bezpłatnych praktyk/stażu na początek
                </Typography>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="no"
                        name="radio-buttons-group"
                        sx={{
                            borderColor: theme.palette.secondary.light,
                            color: theme.palette.text.primary,
                        }}
                    >
                        <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Tak"
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="Nie"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: theme.palette.text.primary,
                        marginBottom: '3px',
                    }}
                >
                    Ilość miesięcy doświadczenia komercyjnego kandydata w
                    programowaniu
                </Typography>
                <TextField
                    id="work-experience"
                    label="0 miesięcy"
                    InputProps={{
                        inputProps: {
                            min: 0,
                        },
                    }}
                    type="number"
                    variant="standard"
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    sx={{
                        marginRight: '20px',
                        color: theme.palette.text.primary,
                    }}
                >
                    Anuluj
                </Button>
                <ButtonWithIconAndText icon={''} text={'Pokaż wyniki'} />
            </Box>
        </Container>
    );
};
