import React from 'react'
import { UserCSV } from '../../utils/csvUtils'
import { List, ListItem, ListItemText } from '@mui/material';

type UserListProps = {
    usersData: UserCSV[]
}

export const UserList = ({ usersData }: UserListProps) => {
    return (
        <List sx={{ textAlign: 'center' }}>
            {usersData.map((userData: UserCSV) => (
                <ListItem key={userData.email}>
                    <ListItemText
                        primary={`Email: ${userData.email}`}
                        secondary={`Oceny: ${userData.courseCompletion}, ${userData.courseEngagement}, ${userData.projectDegree}, ${userData.teamProjectDegree}`}
                    />
                    <ListItemText
                        primary="Adresy URL-i do GitHuba projektu:"
                        secondary={userData.bonusProjectUrls}
                    />
                </ListItem>
            ))}
        </List>
    )
}
