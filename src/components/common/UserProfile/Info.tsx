import { InfoBox } from '../account/info/InfoBox';
import React from 'react';
import { UserProfileProps } from './UserProfile';
import { Status } from 'types';

export const Info = ({ userProfile }: UserProfileProps) => {
    const { avatar, firstName, lastName, githubUsername, phone, email, bio, status } = userProfile?.info || {};
    return (
        <InfoBox
        avatar={ avatar as string }
        firstName={ firstName as string }
        lastName={ lastName as string }
        githubUsername={ githubUsername as string }
        phone={ phone as string }
        email={ email as string }
        bio= { bio as string }
        status={ status as Status}
    />);
};
