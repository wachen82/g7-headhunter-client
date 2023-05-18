import { apiUrl } from '../config/api';
import { ENDPOINTS } from '../services/endpoints/endpoints';
interface UserCSV {
    email: string;
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    bonusProjectUrls: string[];
}

export const saveCsv = async (data: UserCSV) => {
    try {
        const saveResponse = await fetch(`${apiUrl}${ENDPOINTS.saveCsv}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const response = await saveResponse.json();
        if (!saveResponse.ok) {
            return { success: false, message: response.message };
        }
        return { success: true };
    } catch {
        return { success: false, message: 'Błąd podczas zapisywania plik csv' };
    }
};
