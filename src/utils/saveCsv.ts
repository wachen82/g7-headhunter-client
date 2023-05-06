import { apiUrl } from '../config/api';
import { UserCSV } from './csvUtils';

export const saveCsv = async (data: UserCSV) => {
    try {
        const saveResponse = await fetch(`${apiUrl}/api/save-csv`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!saveResponse.ok) {
            console.error('Failed to save data');
        }
        await saveResponse.json();
    } catch (error) {
        console.error(error);
    }
};
