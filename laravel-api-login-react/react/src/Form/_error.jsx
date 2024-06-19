import {styled} from '@mui/material'

const StyledError = styled('p')(({theme}) => ({
    color: theme.palette.error.main, 
    fontWeight:'bold',
    fontSize: '12px',
    marginTop: -10,
    marginBottom: 12,
    marginLeft:10
}));

export default StyledError