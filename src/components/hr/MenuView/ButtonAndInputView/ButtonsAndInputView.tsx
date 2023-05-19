import { Container } from '@mui/material'
import { ButtonMain } from '../../../common/Buttons/ButtonMain'
import { SearchIcon } from '../../../icon/SearchIcon'
import theme from '../../../../theme'
import { InputWithIconAndText } from '../../../common/Inputs/InputWithIconAndText'

export const ButtonsAndInputView = () => {
    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                }}
            >
                <InputWithIconAndText />
                <ButtonMain
                    icon={<SearchIcon />}
                    text="Filtrowanie"
                    sx={{
                        textTransform: 'none',
                        width: '111px',
                        height: '38px',
                        display: 'flex',
                        fontWeight: 'normal',
                        color: theme.palette.text.primary,
                        bgcolor: theme.palette.grey['800'],
                        borderRadius: '0'
                    }}
                />
            </Container>
        </>
    )
}
