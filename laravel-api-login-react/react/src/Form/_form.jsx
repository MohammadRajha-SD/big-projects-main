import {styled} from '@mui/material'

const StyledForm = styled('form') (({theme})=> ({
    width: '460px',
    position: 'relative',
    zIndex: 1,
    maxWidth: '460px',
    padding: '34px',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
        boxShadow: theme.shadows[5],
    },
}));

export default StyledForm