import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    image: {
        width: 85, 
        height: 85 
    },
    appBar: {
        backgroundColor: '#f5f5f5', 
        color: '#556', 
        // boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)', 
        padding: '0px 25px',
        minHeight: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1.8px solid #ddd' 
    },
    contentPagination: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: 30
    }
}))
