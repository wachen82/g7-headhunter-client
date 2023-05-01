import {Container, Divider, Typography} from "@mui/material";
import {DropAndClickBox} from "../../components/admin/DropAndClickBox";
import theme from "../../theme";
import {HrForm} from "../../components/forms/HrForm/HrForm";

export const AdminPage = () => {
    return (
        <main style={{display: 'flex', justifyContent: 'center'}}>
            <Container sx={{maxWidth: '80%', margin: '0 auto', textAlign: 'center', backgroundColor: theme.palette.secondary.light }}>
                <Typography variant="h1" color={theme.palette.text.primary} sx={{ fontSize: 32,  padding: 3, textAlign:"left"}}>Panel administratora</Typography>
                <Divider sx={{backgroundColor: theme.palette.primary.main}}/>
                <Typography variant="h2" color={theme.palette.text.primary} sx={{ fontSize: 26,  padding: 5, textAlign:"center"}}>Importuj kursantów</Typography>
                <DropAndClickBox />
                <Typography variant="h2" color={theme.palette.text.primary} sx={{ fontSize: 26,  padding: 5, textAlign:"center"}}>Dodaj headhunterów</Typography>
                <HrForm/>
            </Container>
        </main>
    )
}
