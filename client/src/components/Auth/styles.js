import { makeStyles } from '@mui/styles';

export default makeStyles({
    paper: {
        marginTop: '64px', // Replacing theme.spacing(8)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px', // Replacing theme.spacing(2)
    },
    root: {
        '& .MuiTextField-root': {
            margin: '8px', // Replacing theme.spacing(1)
        },
    },
    avatar: {
        margin: '8px', // Replacing theme.spacing(1)
        backgroundColor: '#f50057', // Using a fixed color to mimic theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '24px', // Replacing theme.spacing(3)
    },
    submit: {
        margin: '24px 0 16px', // Replacing theme.spacing(3, 0, 2)
    },
    googleButton: {
        marginBottom: '16px', // Replacing theme.spacing(2)
    },
});
