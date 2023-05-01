import Button from '@mui/material/Button'
import theme from "../../theme";

interface Props {
    handleFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileButton = ({ handleFileInputChange }: Props) => (
    <Button component="label" sx={{ backgroundColor: theme.palette.primary.main, color:theme.palette.text.primary }}>
        Dodaj plik
        <input
            onChange={handleFileInputChange}
            type="file"
            accept=".csv"
            hidden
        />
    </Button>
)
