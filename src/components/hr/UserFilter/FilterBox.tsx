import React, { ChangeEvent, useContext, useRef, useState } from 'react';
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
import theme from '../../../theme';
import { ButtonMain } from '../../common/Buttons/ButtonMain';
import { SingleGradeFilter } from './Grades/SingleGradeFilter';
import { expectedContractTypeOptions, expectedTypeWorkOptions, initialFilterData } from './initialData';
import { FilterDataContext } from '../../../context/FilterDataContext';

interface Props {
    closeModal: () => void;
}

export const FilterBox = ({ closeModal }:Props) => {
    const { params, setParams } = useContext(FilterDataContext);
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
    const workExperienceRef = useRef<HTMLInputElement | null>(null);
    const expectedSalaryFromRef = useRef<HTMLInputElement | null>(null);
    const expectedSalaryToRef = useRef<HTMLInputElement | null>(null);
    const inputRefs = [
        expectedSalaryFromRef,
        expectedSalaryToRef,
        workExperienceRef,
    ];
    const handleClearFilterClick = () => {
        setFilterData(initialFilterData);
        inputRefs.forEach((ref) => {
            if (ref.current) {
                ref.current.value = '';
                ref.current.focus?.();
            }
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFilterData((prevFilterData) => ({
            ...prevFilterData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = () => {
        const filterParams = new URLSearchParams();

        Object.entries(filterData).forEach(([key, value]) => {
            filterParams.set(key, String(value));
        });

        setParams(filterParams.toString());
        closeModal()
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
                                inputRef={expectedSalaryFromRef}
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
                                inputRef={expectedSalaryToRef}
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
                            inputRef={workExperienceRef}
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
                            onClick={closeModal}
                        >
                            Anuluj
                        </Button>
                        <ButtonMain text={'Pokaż wyniki'} type='submit' onClick={() => handleSubmit()} />
                    </Box>
                </form>
            </Container>
        </>
    );
};
