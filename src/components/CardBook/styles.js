import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex", 
        minHeight: 160, 
        marginTop: 10,
    },
    contentImg: {
        display: "flex", 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
    },
    contentText: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around',
        padding: "10px 30px 10px 25px" 
    }
}))
