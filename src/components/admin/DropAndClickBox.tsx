import * as React from 'react'
import Button from '@mui/material/Button'
import {Grid} from "@mui/material";
import { useState } from 'react'
import { UserCSV, handleCsvFile, getCsvFile } from '../../utils/csvUtils'
import { sendCsvToBackend } from '../../utils/sendCsvToBackend'
import { FileButton } from './FileButton'
import { UserList } from './UserList'
import { DropBox } from './DropBox'

export const DropAndClickBox = () => {
    const [active, setActive] = useState<boolean>(false)
    const [usersData, setUsersData] = useState<UserCSV[]>([])

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setActive(false)
        const csvFile = await getCsvFile(e.dataTransfer.files)
        if (!csvFile) {
            return
        }
        await handleCsvFile(csvFile, setUsersData)
    }
    const handleFileInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault()
        const csvFile = await getCsvFile((e.target.files as FileList) || [])
        if (!csvFile) {
            return
        }
        await handleCsvFile(csvFile, setUsersData)
    }
    const handleSendButtonClick = async () => {
        await sendCsvToBackend(usersData)
    }

    return (
        <>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <FileButton handleFileInputChange={handleFileInputChange} />
                </Grid>
                <Grid item>
                    <p style={{ padding: '1rem' }}>lub</p>
                </Grid>
                <Grid item>
                    <DropBox active={active} setActive={setActive} handleDrop={handleDrop} />
                </Grid>
            </Grid>
            <UserList usersData={usersData} />
            <Button onClick={handleSendButtonClick}>
                Wyślij dane na serwer
            </Button>
        </>
    )
}
