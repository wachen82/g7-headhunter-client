import {apiUrl} from "../config/api";
import {saveCsv} from "./saveCsv";

export const uploadCsvFile = async (csvFile: string) => {
    const formData = new FormData()
    const fileBlob = new Blob([csvFile], {type: 'text/csv'})
    formData.append('csvFile', fileBlob, 'csvFile.csv');
    try {
        const response = await fetch(`${apiUrl}/admin/validate-csv`, {
            method: 'POST',
            body: formData,
        })
        if (!response.ok) {
            console.error('Failed to upload CSV file')
        }
        const jsonResponse = await response.json();
        await saveCsv(jsonResponse);
    } catch (error) {
        console.error(error)
    }
}

