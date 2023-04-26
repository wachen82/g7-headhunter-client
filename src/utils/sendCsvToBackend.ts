import { UserCSV } from './csvUtils'
import {apiUrl} from "../config/api";

export const sendCsvToBackend = async (usersData: UserCSV[]) => {
    try {
        const response = await fetch(`${apiUrl}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usersData),
        })

        if (!response.ok) {
            console.error('Błąd podczas przesyłania danych na serwer.')
        }

        console.log('Dane zostały pomyślnie przesłane na serwer!')
    } catch (error) {
        console.error(error)
    }
}
