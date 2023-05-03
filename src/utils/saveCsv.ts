import {apiUrl} from "../config/api";
interface UserCSV {
    email: string
    courseCompletion: number
    courseEngagement: number
    projectDegree: number
    teamProjectDegree: number
    bonusProjectUrls: string[]
}
export const saveCsv = async (data: UserCSV) => {
    try {
        const saveResponse = await fetch(`${apiUrl}/admin/save-csv`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!saveResponse.ok) {
            console.error('Failed to save data');
        }
        await saveResponse.json();
    } catch (error) {
        console.error(error)
    }
}
