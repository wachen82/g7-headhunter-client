import React from 'react'
import { Box, Typography } from '@mui/material'
import theme from '../../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface Props {
    gradeName: string
    grade: number
}

export const SingleGrade = (props: Props) => {
    const { gradeName, grade } = props
    let starColor
    switch (grade) {
        case 1:
            starColor = 'theme.palette.primary.main'
            break
        case 2:
            starColor = 'theme.palette.primary.main'
            break
        case 3:
            starColor = 'theme.palette.primary.main'
            break
        case 4:
            starColor = 'theme.palette.primary.main'
            break
        case 5:
            starColor = 'theme.palette.primary.main'
            break
    }

    return (
        <Box
            sx={{
                width: '163px',
                height: '90px',
                marginRight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    height: '41px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: theme.palette.grey['100'],
                        fontWeight: 'light',
                    }}
                >
                    {gradeName}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: theme.palette.text.primary,
                        marginRight: '10px',
                    }}
                >
                    {grade}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: theme.palette.grey['200'],
                        marginRight: '12px',
                    }}
                >
                    /5
                </Typography>
                <Typography
                    sx={{
                        fontSize: '20px',
                        // color: theme.palette.primary.main,
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faStar} id="star1" />
                </Typography>
                <Typography
                    sx={{
                        fontSize: '20px',
                        // color: theme.palette.primary.main,
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faStar} id="star2" />
                </Typography>
                <Typography
                    sx={{
                        fontSize: '20px',
                        // color: theme.palette.primary.main,
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faStar} id="star3" />
                </Typography>
                <Typography
                    sx={{
                        fontSize: '20px',
                        // color: theme.palette.primary.main,
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faStar} id="star4" />
                </Typography>
                <Typography
                    sx={{
                        fontSize: '20px',
                        // color: theme.palette.primary.main,
                        color: theme.palette.grey['400'],
                    }}
                >
                    <FontAwesomeIcon icon={faStar} id="star5" />
                </Typography>
            </Box>
        </Box>
    )
}
