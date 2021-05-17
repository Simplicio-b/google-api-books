// libs
import { useHistory } from 'react-router-dom'

// icons - img
import SearchIcon from '@material-ui/icons/Search'

// styles
import { useStyles } from './styles'

function InputSearch() {
    
    const classes = useStyles()
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        history.push('search')
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
