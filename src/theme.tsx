import { createTheme } from '@mui/material/styles';
import { plPL } from '@mui/material/locale';


const theme = createTheme({
    palette: {
        primary: {
            main: '#e02735', // kolor tła buttonów i gwiazdek
        },
        secondary: {
            main: '#222224', // kolor główny tła widoków
            light: '#292A2B', // kolor tła inputów, tła wydzielonego na środku i CV
            contrastText: '#7E7E7E', // kolor tekstu w inputach, ikonki kiedy brak zdj "do rozmowy"
        },
        text: {
            primary: '#F7F7F7', // kolor główny - biała czcionka
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
        background: {
            default: '#7E7E7E',
            paper: '#1E1E1F',
        },
        action: {
            disabledBackground: '#292A2B',
            disabledOpacity: 0.7,
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#7E7E7E',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {},
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#CFCFCF',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#292A2B',
                    color: '#7E7E7E',
                    '&:hover': {
                        backgroundColor: '#292A2B',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#292A2B',
                        color: 'green',
                    },
                    '& label': {
                        color: '#7E7E7E',
                    },
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                item: {
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '130px',
                    padding: '0',
                },
            },
        },
    },
}, plPL);

export default theme;
