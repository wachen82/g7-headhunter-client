import { PortfolioBar } from '../UserPortfolio/PortfolioBar';
import { PortfolioLink } from '../UserPortfolio/PortfolioLink/PortfolioLink';
import React from 'react';
import { PortfolioBox } from './PortfolioBox';
import { UserProfileProps } from './UserProfile';

export const PortfolioUrls = ({ userProfile }: UserProfileProps) => {
    const { projectUrls, bonusProjectUrls, portfolioUrls } = userProfile?.profile || {};
    return (<>
        <PortfolioBar sectionName={'Portfolio'} />
        <PortfolioBox>
            {portfolioUrls?.map(link => <PortfolioLink url={link} key={link} />)}
        </PortfolioBox>
        <PortfolioBar sectionName={'Projekt w zespole Scrumowym'} />
        <PortfolioBox>
            {bonusProjectUrls?.map(link => <PortfolioLink url={link} key={link} />)}
        </PortfolioBox>
        <PortfolioBar sectionName={'Projekt na zaliczenie'} />
        <PortfolioBox>
            {projectUrls?.map(link => <PortfolioLink url={link} key={link} />)}
        </PortfolioBox>
    </>);
};
