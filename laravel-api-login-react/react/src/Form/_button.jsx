import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(({theme}) => ({
    width: '100%',
    transition: '.4s',
    ':hover': {
      opacity: '0.8',
    }
}));

export default StyledButton