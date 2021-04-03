import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
    dir?: string
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, dir = '', ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            dir={dir}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel