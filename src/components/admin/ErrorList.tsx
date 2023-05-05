import { List, ListItem, ListItemText } from '@mui/material'
import theme from '../../theme'

interface ErrorWithField extends ErrorCsv {
    field: string
    message: string
}

export type ErrorOrErrorWithField = ErrorCsv | ErrorWithField

export interface ErrorCsv {
    email?: { row: number; message: string }
    courseCompletion?: { row: number; message: string }
    courseEngagement?: { row: number; message: string }
    projectDegree?: { row: number; message: string }
    teamProjectDegree?: { row: number; message: string }
    bonusProjectUrls?: Array<{ row: number; field: string; message: string }>
}

interface ErrorListProps {
    errors: ErrorOrErrorWithField[]
}

export const ErrorList = ({ errors }: ErrorListProps) => {
    const hasHeaderError = errors.some((error) => 'field' in error)

    return (
        <List
            style={{
                color: theme.palette.error.main,
                height: '15vh',
                overflowY: 'auto',
            }}
        >
            {errors.map((error, index) => {
                const hasErrors = Object.values(error).some(
                    (error) => error !== undefined
                )
                if (!hasErrors) return null

                const primary = hasHeaderError ? (
                    `Nazwa nagłówka: ${(error as ErrorWithField).field}`
                ) : (
                    <ul
                        style={{
                            color: theme.palette.primary.main,
                            listStyle: 'none',
                        }}
                    >
                        Rząd {Object.values(error)[0].row}:{' '}
                    </ul>
                )

                const secondary = hasHeaderError ? (
                    <span
                        style={{ color: theme.palette.secondary.contrastText }}
                    >{`Błąd: ${(error as ErrorWithField).message}`}</span>
                ) : (
                    <>
                        {error.email?.message && (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                            >
                                Email: {error.email.message}
                            </li>
                        )}
                        {error.courseCompletion?.message && (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                            >
                                Ocena stopnie przejścia kursu:{' '}
                                {error.courseCompletion.message}
                            </li>
                        )}
                        {error.courseEngagement?.message && (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                            >
                                Ocena stopnia zaangażowania w kursie:{' '}
                                {error.courseEngagement.message}
                            </li>
                        )}
                        {error.projectDegree?.message && (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                            >
                                Ocena zadania zaliczeniowego:{' '}
                                {error.projectDegree.message}
                            </li>
                        )}
                        {error.teamProjectDegree?.message && (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                            >
                                Ocena pracy w zespole:{' '}
                                {error.teamProjectDegree.message}
                            </li>
                        )}
                        {error.bonusProjectUrls?.map((bonusError) => (
                            <li
                                style={{
                                    color: theme.palette.secondary.contrastText,
                                }}
                                key={bonusError.field}
                            >
                                Linki do bonusowego projektu: {bonusError.field}{' '}
                                - {bonusError.message}
                            </li>
                        ))}
                    </>
                )

                return (
                    <ListItem key={index}>
                        <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>
                )
            })}
        </List>
    )
}
