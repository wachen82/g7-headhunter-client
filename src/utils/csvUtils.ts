import React from 'react'
import { parse } from 'papaparse'
export interface UserCSV {
    email: string
    courseCompletion: number
    courseEngagement: number
    projectDegree: number
    teamProjectDegree: number
    bonusProjectUrls: string
}
export const getCsvFile = async (files: FileList) => {
    const csvFiles = Array.from(files).filter(
        (file) => file.type === 'text/csv'
    )
    if (csvFiles.length === 0) {
        return null
    }
    return csvFiles[0]
}

export const handleCsvFile = async (
    file: File,
    setUsersData: React.Dispatch<React.SetStateAction<UserCSV[]>>
) => {
    const text = await file.text()
    const result = parse(text, { header: true })
    setUsersData((prevState: UserCSV[]) => {
        const newData = [...prevState, ...result.data]
        return newData as UserCSV[]
    })
}
