import React from 'react';

export type ButtonData = {
    text: string;
    action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, email?: string, status?: string) => Promise<void> | void;
    status?: string;
};
