import {styled} from '@mui/material'

const StyledInput = styled('input')(({theme}) => ({
    outline:0,
    background:'#fff',
    width: '100%',
    border:'2px solid #e6e6e6',
    margin: '0 0 15px',
    padding: '15px',
    boxSizing: 'border-box',
    fontSize: '14px',
    transition: 'all 0.3s',
    borderRadius: '5px',
    ":focus": {
      borderColor: 'skyblue',
    }
}));

export default StyledInput