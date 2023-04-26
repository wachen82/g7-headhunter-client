import Button from '@mui/material/Button'
import theme from "../../theme";

interface Props {
    handleFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileButton = ({ handleFileInputChange }: Props) => (
    <Button component="label" sx={{ color: theme.palette.primary.main }}>
        Dodaj plik
        <input
            type="file"
            hidden
            onChange={handleFileInputChange}
            accept=".csv"
        />
    </Button>
)
