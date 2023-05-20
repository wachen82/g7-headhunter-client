import { apiUrl } from '../config/api';
import { saveCsv } from './saveCsv';
import { ErrorCsv } from '../components/admin/ErrorList';
import { ENDPOINTS } from '../services/endpoints/endpoints';

export const uploadCsvFile = async (
    csvFile: string,
    setErrors: (errors: ErrorCsv[]) => void
) => {
    const formData = new FormData();
    const fileBlob = new Blob([csvFile], { type: 'text/csv' });
    formData.append('csvFile', fileBlob, 'csvFile.csv');
    try {
        const response = await fetch(`${apiUrl}${ENDPOINTS.validateCsv}`, {
            credentials: 'include',
            method: 'POST',
            body: formData,
        });
        const jsonResponse = await response.json();
        const { success, message } = await saveCsv(jsonResponse);
        if (!response.ok) {
            return { success, message };
        }
        if (jsonResponse && jsonResponse.errors) {
            setErrors(jsonResponse.errors);
        } else {
            return { success, message };
        }
    } catch {
        return { success: false, message: 'Błąd podczas dodawania plik csv' };
    }
};
