import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#e02735', //kolor buttona
        },
        secondary: {
            main: '#222224', //tło
            light: '#292A2B', //tło inputów
            contrastText: '#7E7E7E', //kolor tekstu w inputach logowania
        },
        text: {
            primary: '#F7F7F7', //kolor linków (zapomniałeś hasła)
        },
    },
})

export default theme
