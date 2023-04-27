import {uploadCsvFile} from "./uploadCsv";

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
    const file = csvFiles[0]
    const reader = new FileReader()

    return new Promise<string>((resolve, reject) => {
        reader.onload = () => {
            const csvData = reader.result as string
            resolve(csvData)
        }
        reader.onerror = () => {
            reject(reader.error)
        }
        reader.readAsText(file)
    })
}

export const handleCsvFile = async (csvFile: string) => {
    try {
        const response = await uploadCsvFile(csvFile)
        console.log('CSV file uploaded successfully', response)
    } catch (error) {
        console.error('Failed to upload CSV file', error)
    }
}
