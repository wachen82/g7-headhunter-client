import { IUserSkills } from 'types';
import { apiUrl } from '../config/api';
import { ENDPOINTS } from '../services/endpoints/endpoints';


export const saveCsv = async (data: IUserSkills) => {
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
