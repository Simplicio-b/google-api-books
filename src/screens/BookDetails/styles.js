import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#f5f5f5', 
        color: '#556', 
        // boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)', 
        padding: '0px 25px',
        minHeight: 170,
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1.8px solid #ddd' 
    },
    contentHeader: {
        paddingLeft: 80,
        paddingBottom: 10,
        display: 'flex', 
        flex: 1, 
        paddingTop: 15
    },
    contentHeaderTitle: {
        display: 'flex', 
        flex: 1, 
        alignItems: 'flex-start', 
        flexDirection: 'column'
    }
}))
