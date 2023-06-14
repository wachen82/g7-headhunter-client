import { ExpectationsBox } from '../UserPortfolio/Expectations/ExpectationsBox';
import React from 'react';
import { Apprenticeship, ContractType, TypeWork } from 'types';
import { UserProfileProps } from './UserProfile';

export const Expectations = ({ userProfile }: UserProfileProps) => {
    const {
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
    } = userProfile?.profile.expectations || {};

    return <ExpectationsBox
        expectedTypeWork={expectedTypeWork as TypeWork}
        targetWorkCity={targetWorkCity}
        expectedContractType={expectedContractType as ContractType}
        expectedSalary={expectedSalary ? parseInt(expectedSalary) : undefined}
        canTakeApprenticeship={canTakeApprenticeship as Apprenticeship}
        monthsOfCommercialExp={monthsOfCommercialExp as number}
    />;
};
