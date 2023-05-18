import { apiUrl } from '../config/api';
import { saveCsv } from './saveCsv';
import { ErrorCsv } from '../components/admin/ErrorList';
import { ENDPOINTS } from '../services/endpoints/endpoints';

export const uploadCsvFile = async (
    csvFile: string,
    setErrors: (errors: ErrorCsv[]) => void,
    handleUploadSuccess: () => void
) => {
    const formData = new FormData();
    const fileBlob = new Blob([csvFile], { type: 'text/csv' });
    formData.append('csvFile', fileBlob, 'csvFile.csv');
    const success = true;
    try {
        const response = await fetch(`${apiUrl}${ENDPOINTS.validateCsv}`, {
            credentials: 'include',
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            console.error('Failed to upload CSV file');
        }
        const jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.errors) {
            setErrors(jsonResponse.errors);
        } else {
            console.log('CSV file is ready to be saved');
            const response = await saveCsv(jsonResponse, success);
            if (response === undefined) {
                return handleUploadSuccess();
            }
        }
    } catch (error) {
        console.error(error);
    }
};
