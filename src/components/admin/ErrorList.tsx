import {List, ListItem, ListItemText} from "@mui/material";
import theme from "../../theme";
interface ErrorWithField extends ErrorCsv {
    field: string;
}

type ErrorOrErrorWithField = ErrorCsv | ErrorWithField;

export interface ErrorCsv {
    email?: { row: number; message: string };
    courseCompletion?: { row: number; message: string };
    courseEngagement?: { row: number; message: string };
    projectDegree?: { row: number; message: string };
    teamProjectDegree?: { row: number; message: string };
    bonusProjectUrls?: Array<{ row: number; field: string; message: string }>;
}


interface ErrorListProps {
    errors: ErrorOrErrorWithField[];
}

export const ErrorList = ({errors}: ErrorListProps) => {
    const hasHeaderError = errors.some((error) => 'field' in error);

    return (
        <>
            {hasHeaderError && (
                <p style={{color: theme.palette.error.main}}>
                    Błędny nagłówek pliku CSV
                </p>
            )}
            <List>
                {errors.map((error, index) => {
                    const errorValues = Object.values(error);
                    const hasErrors = errorValues.some((error) => error !== undefined);
                    if (!hasErrors) {
                        return null;
                    }
                    return (
                        <ListItem key={index}>
                            <ListItemText
                                primary={
                                    <ul style={{color: theme.palette.primary.main, listStyle: "none"}}>
                                        {`Row ${Object.values(error)[0].row}: `}
                                    </ul>
                                }
                                secondary={
                                    <>
                                        {error.email?.message && (
                                            <li style={{color: theme.palette.secondary.contrastText}}>
                                                Email: {error.email.message}
                                            </li>
                                        )}
                                        {error.courseCompletion?.message && (
                                            <li style={{color: theme.palette.secondary.contrastText}}>
                                                Course Completion: {error.courseCompletion.message}
                                            </li>
                                        )}
                                        {error.courseEngagement?.message && (
                                            <li style={{color: theme.palette.secondary.contrastText}}>
                                                Course Engagement: {error.courseEngagement.message}
                                            </li>
                                        )}
                                        {error.projectDegree?.message && (
                                            <li style={{color: theme.palette.secondary.contrastText}}>
                                                Project Degree: {error.projectDegree.message}
                                            </li>
                                        )}
                                        {error.teamProjectDegree?.message && (
                                            <li style={{color: theme.palette.secondary.contrastText}}>
                                                Team Project Degree: {error.teamProjectDegree.message}
                                            </li>
                                        )}
                                        {error.bonusProjectUrls?.map((bonusError) => (
                                            <li style={{color: theme.palette.secondary.contrastText}}
                                                key={bonusError.field}>
                                                Bonus Project Url: {bonusError.field} - {bonusError.message}
                                            </li>
                                        ))}
                                    </>
                                }
                            />
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
};
