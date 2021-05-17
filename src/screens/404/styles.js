import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 600, 
        justifyContent: 'center',  
        alignItems: 'center',  
        flexDirection: 'column'
    },
    image: {
        width: 350, 
        height: 350
    },
    link: {
        color: '#6c63ff',
        fontWeight: '700',
        textDecoration: 'none'
    }
}))
