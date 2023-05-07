import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface RowData {
    email: string;
    courseCompletion: number;
    courseEngagement: number;
    projectDegree: number;
    teamProjectDegree: number;
    bonusProjectUrls: string;
}

export interface ErrorData {
    row: RowData;
    errors: {
        [key: string]: {
            row: number;
            field: any;
            error: boolean;
            message: string;
        }[];
    };
}

const errors: ErrorData[] = [
    {
        row: {
            email: 'milena@gmail.com',
            courseCompletion: 5,
            courseEngagement: 5,
            projectDegree: 5,
            teamProjectDegree: 5,
            bonusProjectUrls:
                'https:/example.com/link1; https://example.com/link2; https://example.com/link3',
        },
        errors: {
            bonusProjectUrls: [
                {
                    row: 1,
                    field: 'https:/example.com/link1',
                    error: true,
                    message: 'błędny adres url',
                },
            ],
        },
    },
    {
        row: {
            email: 'milena@gmail.com',
            courseCompletion: 2,
            courseEngagement: 22,
            projectDegree: 2,
            teamProjectDegree: 4,
            bonusProjectUrls:
                'https://example.com/link1;https://example.com/link2; https://example.com/link3',
        },
        errors: {
            courseEngagement: [
                {
                    row: 2,
                    field: '22',
                    error: true,
                    message: 'zła wartosc',
                },
            ],
        },
    },
];

export const ErrorList: React.FC = () => {
    return (
        <List>
            {errors.map((error, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={`Rząd ${index + 1}: ${
                            error.errors
                                ? Object.keys(error.errors).join(', ')
                                : ''
                        }`}
                        secondary={
                            <React.Fragment>
                                {Object.entries(error.errors).map(
                                    ([key, value], index) => (
                                        <React.Fragment key={index}>
                                            {value.map((errorItem) => (
                                                <div key={errorItem.row}>
                                                    <span>{`${key} - Rząd ${errorItem.row}: `}</span>
                                                    <span>{`${errorItem.message}`}</span>
                                                </div>
                                            ))}
                                        </React.Fragment>
                                    )
                                )}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};
