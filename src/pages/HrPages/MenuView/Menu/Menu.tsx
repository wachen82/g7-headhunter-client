import * as React from 'react'
import { Box } from '@mui/material'
import { BasicPanel } from './BasicPanel'
import { HrPage1 } from '../HrPage1/HrPage1'
import { HrPage2 } from '../HrPage2/HrPage2'
import { CustomTabs } from './CustomTabs'

export const Menu = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%', padding: 0 }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    padding: '0',
                    margin: '0',
                }}
            >
                <CustomTabs
                    tabs={[
                        {
                            label: 'Dostępni kursanci',
                            index: 0,
                            value: 0,
                        },
                        {
                            label: 'Do rozmowy',
                            index: 1,
                            value: 1,
                        },
                    ]}
                    value={value}
                    onChange={handleChange}
                />
            </Box>
            <BasicPanel value={value} index={0}>
                <HrPage1 />
            </BasicPanel>
            <BasicPanel value={value} index={1}>
                <HrPage2 />
            </BasicPanel>
        </Box>
    )
}
