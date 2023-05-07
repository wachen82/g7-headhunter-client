import * as React from 'react'
import { TabsProps } from '../../../../types/tabs'
import { Box } from '@mui/material'
import theme from '../../../../theme'

export const BasicPanel = ({ value, children, index }: TabsProps) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ padding: '0', margin: '0' }}>
                    <h1
                        style={{
                            color: theme.palette.text.primary,
                            padding: '0',
                            margin: '0',
                        }}
                    >
                        {children}
                    </h1>
                </Box>
            )}
        </div>
    )
}
