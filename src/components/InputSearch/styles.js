import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    form: {
        padding: '8px 10px',
        height: 44,
        display: 'flex', 
        width: '50%', 
        borderRadius: 24,
        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)' 
    },
    input: {
        border: 'none',
        outline: 'none',
        padding: '0px 10px',
        flex: 1,
        height: '100%',
        backgroundColor: 'transparent'
    },
    btn: {
        borderRadius: 0,
        border: 'none',
        height: '100%',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        borderLeft: '1.8px solid #6c63ff'
    },
}))
