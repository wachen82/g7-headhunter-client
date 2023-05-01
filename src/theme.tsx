import {createTheme} from '@mui/material/styles'

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
            100: '#0B8BD4', // kolor czcionki linków
            200: '#C92929', // kolor podkreślenia w menu hr
            300: '#172A35', // kolor tła buttona "Wyczyść wszystkie"
        },
    },
})

export default theme
