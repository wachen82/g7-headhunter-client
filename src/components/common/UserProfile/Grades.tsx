import { GradesBox } from '../UserPortfolio/Grades/GradesBox';
import React from 'react';
import { UserProfileProps } from './UserProfile';

export const Grades = ({ userProfile }: UserProfileProps) => {
    const { courseCompletion, courseEngagement, projectDegree, teamProjectDegree } = userProfile?.profile.skills || {};

    return <GradesBox
        courseCompletion={courseCompletion as number}
        courseEngagement={courseEngagement as number}
        projectDegree={projectDegree as number}
        teamProjectDegree={teamProjectDegree as number}
    />;
};
