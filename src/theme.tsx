import { createTheme } from '@mui/material/styles'
import { Simulate } from 'react-dom/test-utils'
import input = Simulate.input

const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: '#292A2B',
                    color: '#F7F7F7',
                    '&:hover': {
                        backgroundColor: '#292A2B',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: '#292A2B',
                            color: '#F7F7F7',
                        },
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#292A2B',
                        color: '#F7F7F7',
                    },
                },
            },
        },
    },

    palette: {
        primary: {
            main: '#e02735', //kolor buttona
        },
        secondary: {
            main: '#222224', //tło
            light: '#292A2B', //tło inputów
            contrastText: '#7E7E7E', // kolor tekstu w inputach, ikonki kiedy brak zdj "do rozmowy"
        },
        text: {
            primary: '#F7F7F7', //kolor linków (zapomniałeś hasła)
            secondary: '#7E7E7E', //kolor tekstu w inputach logowania
        },
        background: {
            default: '#7E7E7E',
            paper: '#1E1E1F',
        },
        grey: {
            100: '#CFCFCF', // kolor czcionki szarej
            200: '#9E9E9E', // kolor czcionki wyszarzonej
            300: '#666666', // kolor strzałek,lupki i czcionki "Szukaj" w input
            400: '#4D4D4D', // kolor ikonki filtrowania, szarych gwiazdek, czcionki "O mnie"
            500: '#333333', // kolor czcionki cyfry paginacji
            600: '#222324', // kolor tła, gdy rozwjamy pojedynczego kursanta i opisów w CV
            700: '#0A0A0A', // kolor tła 'filtrowanie',
            800: '#1E1E1F', // kolor tła gdzie ikonka MegaK, pod wydzieleniem na środku, inputa 'Szukaj'
            900: '#202122', // kolor czarnych podkreśleń w 'do rozmowy'
        },
        info: {
            main: '#0B8BD4', // kolor czcionki linków
            light: '#C92929', // kolor podkreślenia w menu hr
            dark: '#172A35', // kolor tła buttona "Wyczyść wszystkie"
        },
    },
})

export default theme
