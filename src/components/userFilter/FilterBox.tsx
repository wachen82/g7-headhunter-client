import React, { ChangeEvent, useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import theme from '../../theme';
import { ButtonMain } from '../common/Buttons/ButtonMain';
import { SingleGradeFilter } from './Grades/SingleGradeFilter';
import { expectedContractTypeOptions, expectedTypeWorkOptions, initialFilterData } from './InitialData';
import { apiUrl } from '../../config/api';
import { ENDPOINTS } from '../../services/endpoints/endpoints';
import { SnackBarEnum } from '../../types/formValues';
import { useSnackBar } from '../../hooks/useSnackBar';
import { CustomSnackBar } from '../common/CustomSnackBar/CustomSnackBar';
import axios from 'axios';

export const FilterBox = () => {
    const [filterUsers, setFilterUsers] = useState([])
    const [totalCount, setTotalCount] = useState(0);

    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();

    const [filterData, setFilterData] = useState(initialFilterData);
    const gradeFilters = [
        {
            text: 'Ocena przejścia kursu',
            name: 'courseCompletion',
            value: filterData.courseCompletion,
        },
        {
            text: 'Ocena aktywności i zaangażowania na kursie',
            name: 'courseEngagement',
            value: filterData.courseEngagement,
        },
        {
            text: 'Ocena kodu w projekcie własnym',
            name: 'projectDegree',
            value: filterData.projectDegree,
        },
        {
            text: 'Ocena pracy w zespole w Scrum',
            name: 'teamProjectDegree',
            value: filterData.teamProjectDegree,
        },
    ];

    const handleClearFilterClick = () => {
        setFilterData(initialFilterData);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        setFilterData((prevFilterData) => ({
            ...prevFilterData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}${ENDPOINTS.filter}`, {filterData},{
                withCredentials: true
            }, );
            const { users, totalCount } = response.data;
            console.log(response.data);
            setFilterUsers(users)
            setTotalCount(totalCount)
            showSnackBar(
                `Wybrane przez Ciebie filtry zostały zastosowane`,
                SnackBarEnum.SUCCESS_MESSAGE,
            );
        } catch (e) {
            showSnackBar(
                'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później',
                SnackBarEnum.ERROR_MESSAGE,
            );
        }
        console.log(filterData);
    };
    return (<>
            <Container
                sx={{
                    padding: '24px 22px 19px 18px',
                }}
            >
                <form onSubmit={handleSubmit}>
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
                            onClick={handleClearFilterClick}
                            style={{
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
                    <Box>
                        {gradeFilters.map((filter) => (
                            <SingleGradeFilter
                                key={filter.name}
                                text={filter.text}
                                name={filter.name}
                                value={filter.value}
                                onChange={(name, value) => setFilterData((prevState) => ({
                                    ...prevState,
                                    [name]: value,
                                }))}
                            />
                        ))}
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
                            Preferowane miejsce pracy
                        </Typography>

                        <ToggleButtonGroup
                            color='primary'
                            value={filterData.expectedTypeWork}
                            exclusive
                            onChange={(event, value) => {
                                setFilterData((prevState) => ({
                                    ...prevState,
                                    expectedTypeWork: value,
                                }));
                            }}
                            aria-label='Preferowane miejsce pracy'
                        >
                            {expectedTypeWorkOptions.map((value) => (
                                <ToggleButton
                                    key={value}
                                    value={value}
                                    sx={{
                                        backgroundColor: theme.palette.secondary.light,
                                        color: theme.palette.text.primary,
                                        marginRight: '8px',
                                        textTransform: 'none',
                                        fontSize: '12px',
                                        lineHeight: '19px',
                                        fontWeight: 'light',
                                    }}
                                >
                                    {value}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
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

                        <ToggleButtonGroup
                            color='primary'
                            value={filterData.expectedContractType}
                            exclusive
                            onChange={(event, value) => {
                                setFilterData((prevState) => ({
                                    ...prevState,
                                    expectedContractType: value,
                                }));
                            }}
                            aria-label='Oczekiwany typ kontraktu'
                        >
                            {expectedContractTypeOptions.map((value) => (
                                <ToggleButton
                                    key={value}
                                    value={value}
                                    sx={{
                                        backgroundColor: theme.palette.secondary.light,
                                        color: theme.palette.text.primary,
                                        marginRight: '8px',
                                        textTransform: 'none',
                                        fontSize: '12px',
                                        lineHeight: '19px',
                                        fontWeight: 'light',
                                    }}
                                >
                                    {value}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>

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
                                id='salary-minimum'
                                name='expectedSalaryFrom'
                                label='np. 1000 zł'
                                variant='standard'
                                onChange={handleChange}
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
                                id='salary-maximum'
                                name='expectedSalaryTo'
                                label='np. 10000 zł'
                                variant='standard'
                                onChange={handleChange}
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
                                aria-labelledby='demo-radio-buttons-group-label'
                                name='canTakeApprenticeship'
                                sx={{
                                    borderColor: theme.palette.secondary.light,
                                    color: theme.palette.text.primary,
                                }}
                                value={filterData.canTakeApprenticeship}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value='TAK'
                                    control={<Radio />}
                                    label='Tak'
                                />
                                <FormControlLabel
                                    value='NIE'
                                    control={<Radio />}
                                    label='Nie'
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
                            id='work-experience'
                            label='0 miesięcy'
                            name='monthsOfCommercialExp'
                            InputProps={{
                                inputProps: {
                                    min: 0,
                                },
                            }}
                            type='number'
                            variant='standard'
                            onChange={handleChange}
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
                        <ButtonMain text={'Pokaż wyniki'} type='submit' onClick={(event) => handleSubmit(event)} />
                    </Box>
                </form>
            </Container>
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </>
    );
};
