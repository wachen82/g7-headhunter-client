import {Paper, Typography} from '@mui/material'
import * as React from 'react'
import theme from "../../theme";

type DropBoxProps = {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => Promise<void>
}

export const DropBox = ({ active, setActive, handleDrop }: DropBoxProps) => {
    return (
    <Paper
        variant="outlined"
        square
        onDragEnter={() => {
            setActive(true)
        }}
        onDragLeave={() => {
            setActive(false)
        }}
        onDragOver={(e) => {
            e.preventDefault()
            setActive(true);

        }}
        onDrop={handleDrop}
        sx={{
            backgroundColor: active ? theme.palette.primary.main : 'transparent',
            padding: '20px',
            textAlign: 'center',
            border: `2px dashed ${theme.palette.primary.main}`,
            borderRadius: '5px',
            cursor: 'pointer',
        }}
    >
        <Typography variant="body1">
            Upuść tutaj
        </Typography>
    </Paper>
    )
}
