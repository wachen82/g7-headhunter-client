import { useTitle } from '../../hooks/useTitle';
import { useAppSelector } from '../../hooks/reduxHooks';
import { apiUrl } from '../../config/api';
import React, { useEffect, useState } from 'react';
import { UserProfilResponse, UserResponse } from 'types';
import { Loading } from '../../components/common/Loading/Loading';
import { UserProfile } from '../../components/common/UserProfile/UserProfile';
import { CustomSnackBar } from '../../components/common/CustomSnackBar/CustomSnackBar';
import { useSnackBar } from '../../hooks/useSnackBar';
import { fetchUserProfile } from '../../utils/fetchUserProfile';
import { UsersAppBar } from '../../components/common/AppBar/UsersAppBar';
import { Box } from '@mui/material';

export const UserPage = () => {
    useTitle('Panel Kursanta');
    const user = useAppSelector((state) => state.user) as UserResponse;
    const [userProfile, setUserProfile] = useState<UserProfilResponse>();
    const fullName = `${userProfile?.info.firstName} ${userProfile?.info.lastName}`;
    const [loading, setLoading] = useState(true);
    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();

    useEffect(() => {
        const url = `${apiUrl}/user/${user._id}`;
        fetchUserProfile(url, setLoading, setUserProfile, showSnackBar);
    }, [user]);

    if (!user) return null;
    return (
        <>
            {loading ? <Loading /> : <><Box sx={{ width: '100vw' }}>
                <UsersAppBar
                    avatarUrl={userProfile?.info.avatar as string}
                    userName={fullName}
                    accountUrl={`${user._id}/account`}
                />
            </Box><UserProfile userProfile={userProfile} /></>}
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
