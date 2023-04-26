import {Container, Divider, Typography} from "@mui/material";
import {DropAndClickBox} from "../../components/admin/DropAndClickBox";
import theme from "../../theme";

export const AdminPage = () => {
    return (
        <main style={{display: 'flex', justifyContent: 'center'}}>
            <Container sx={{maxWidth: '80%', margin: '0 auto', textAlign: 'center', backgroundColor: theme.palette.secondary.light }}>
                <Typography variant="h1" sx={{ fontSize: 48,  padding: 5}}>Panel administratora</Typography>
                <Divider sx={{backgroundColor: theme.palette.primary.main}}/>
                <Typography variant="h2" sx={{ fontSize: 32,  padding: 5}}>Importuj kursantów</Typography>
                <DropAndClickBox />
                <Typography variant="h2" sx={{ fontSize: 32,  padding: 5 }}>Dodaj headhunterów</Typography>
                <Typography variant="body1">Formularz do dodawania hedhunterów</Typography>
            </Container>
        </main>
    )
}
