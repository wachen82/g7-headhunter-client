import { Tabs, Tab } from '@mui/material'
import theme from '../../../../theme'
import { a11yProps } from '../../../../utils/accessTab'

type CustomTabsProps = {
    tabs: {
        label: string
        index: number
        value: number
    }[]
    value: number
    onChange: (event: React.SyntheticEvent, newValue: number) => void
}

export const CustomTabs = ({ tabs, value, onChange }: CustomTabsProps) => {
    return (
        <Tabs value={value} onChange={onChange} aria-label="basic tabs">
            {tabs.map(({ label, index }) => (
                <Tab
                    key={index}
                    sx={{
                        textTransform: 'none',
                        color: theme.palette.text.primary,
                        padding: '23px 34px 19px',
                    }}
                    label={label}
                    {...a11yProps(index)}
                />
            ))}
        </Tabs>
    )
}
