import * as React from 'react'
import {Grid} from "@mui/material";
import {useState} from 'react'
import {getCsvFile, handleCsvFile} from '../../utils/csvUtils'
import {FileButton} from './FileButton'
import {DropBox} from './DropBox'
import {ErrorList} from "./ErrorList";

export const DropAndClickBox = () => {
    const [active, setActive] = useState<boolean>(false)

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setActive(false)
        const csvFile = await getCsvFile(e.dataTransfer.files)
        if (!csvFile) {
            return
        }
        await handleCsvFile(csvFile)
    }
    const handleFileInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault()
        const csvFile = await getCsvFile((e.target.files as FileList) || [])
        if (!csvFile) {
            return
        }
        await handleCsvFile(csvFile)
    }

    return (
        <>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <FileButton handleFileInputChange={handleFileInputChange}/>
                </Grid>
                <Grid item>
                    <p style={{padding: '1rem'}}>lub</p>
                </Grid>
                <Grid item>
                    <DropBox active={active} setActive={setActive} handleDrop={handleDrop}/>
                </Grid>
            </Grid>
            <ErrorList/>
        </>
    )
}
