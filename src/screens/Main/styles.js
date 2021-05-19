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
        height: '100vh',
        // backgroundColor: "#F5F501"
    },
    image: {
        width: 180, 
        height: 180,
        marginBottom: 15
    },
    contentLogo: {
        display: 'flex',  
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    contentInput: {
        display: 'flex',  
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
}))
