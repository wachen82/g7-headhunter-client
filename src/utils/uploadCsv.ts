import { apiUrl } from '../config/api'
import { saveCsv } from './saveCsv'
import { ErrorCsv } from '../components/admin/ErrorList'
import { ENDPOINTS } from '../services/endpoints/endpoints'

export const uploadCsvFile = async (
    csvFile: string,
    setErrors: (errors: ErrorCsv[]) => void
) => {
    const formData = new FormData()
    const fileBlob = new Blob([csvFile], { type: 'text/csv' })
    formData.append('csvFile', fileBlob, 'csvFile.csv')
    try {
        const response = await fetch(`${apiUrl}${ENDPOINTS.validateCsv}`, {
            method: 'POST',
            body: formData,
        })
        if (!response.ok) {
            console.error('Failed to upload CSV file')
        }
        const jsonResponse = await response.json()
        if (jsonResponse && jsonResponse.errors) {
            setErrors(jsonResponse.errors)
        } else {
            console.log('CSV file is ready to be saved', jsonResponse.errors)
            await saveCsv(jsonResponse)
        }
    } catch (error) {
        console.error(error)
    }
}
