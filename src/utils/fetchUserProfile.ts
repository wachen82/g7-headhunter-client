import axios from 'axios';
import { UserProfilResponse } from 'types';
import { handleErrorResponse } from './handleErrorSnackBarResponse';
import { SnackBarEnum } from '../types/formValues';

export const fetchUserProfile = async (url: string, setLoading: (loading: boolean) => void, setUserProfile: (profile: UserProfilResponse) => void, showSnackBar: (message: string, type: SnackBarEnum) => void) => {
    try {
        setLoading(true);
        const res = await axios(url, {
            method: 'GET',
            withCredentials: true,
        });
        setUserProfile(res.data);
        setLoading(false);
    } catch (error: any) {
        setLoading(false);
        handleErrorResponse(error, showSnackBar);
    }
}
