import * as React from 'react';
import { UserDataForm } from '../components/forms/RegisterForm/stepsForms/UserDataForm';
import { ExpectedWorkForm } from '../components/forms/RegisterForm/stepsForms/ExpectedWorkForm';
import { PortfolioForm } from '../components/forms/RegisterForm/stepsForms/PortfolioForm';

export const getStepContent = (step: number) => {
    switch (step) {
        case 0:
            return <UserDataForm/>;
        case 1:
            return <PortfolioForm />;
        case 2:
            return <ExpectedWorkForm />;
        default:
            throw new Error('Niewłaściwy krok');
    }
};
