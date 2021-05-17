import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0, 
        padding: 0, 
        backgroundColor: "#F5F5F5"
    },
    container: {
        display: 'flex',  
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh'
    },
    image: {
        width: 180, 
        height: 180,
        marginBottom: 15
    }
}))
