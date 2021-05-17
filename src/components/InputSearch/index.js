// icons - img
import SearchIcon from '@material-ui/icons/Search'

// styles
import { useStyles } from './styles'

function InputSearch() {
    
    const classes = useStyles()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('asasa')
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit} method="POST">
            <input type="text" className={classes.input} />
            <button type="submit" className={classes.btn}>
                <SearchIcon style={{ color: "#6c63ff" }} />
            </button>
        </form>
    )
}

export default InputSearch
