import React, { useEffect, useState } from 'react';
import { UserProfilResponse } from 'types';
import { UserProfile } from '../../components/common/UserProfile/UserProfile';
import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { HrResponse } from 'types';
import { apiUrl } from '../../config/api';
import { useParams } from 'react-router-dom';
import { useSnackBar } from '../../hooks/useSnackBar';
import { Loading } from '../../components/common/Loading/Loading';
import { CustomSnackBar } from '../../components/common/CustomSnackBar/CustomSnackBar';
import { ENDPOINTS } from '../../services/endpoints/endpoints';
import { fetchUserProfile } from '../../utils/fetchUserProfile';

export const CVPage: React.FC = () => {
    useTitle('CV Kursanta');
    const user = useAppSelector((state) => state.user) as HrResponse;
    const [userProfile, setUserProfile] = useState<UserProfilResponse>();
    const [loading, setLoading] = useState(true);
    const { id, email } = useParams();
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();

    useEffect(() => {
        const url = `${apiUrl}${ENDPOINTS.cv}/${id}/${email}`;
        fetchUserProfile(url, setLoading, setUserProfile, showSnackBar);
    }, [user]);

    if (!user) return null;
    return (
        <>
            {loading ? <Loading /> : <UserProfile userProfile={userProfile} />}
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </>
    );
};
