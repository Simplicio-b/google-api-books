// redux
import { connect } from 'react-redux'
import {
    handleInputSearch,
    handleBtnSearch
} from '../../store/actions'

// libs
import { useHistory } from 'react-router-dom'

// icons - img
import SearchIcon from '@material-ui/icons/Search'

// styles
import { useStyles } from './styles'

function InputSearch(props) {
    const classes = useStyles()
    const history = useHistory()

    const {
        search,
        // actions
        handleInputSearch,
        handleBtnSearch
    } = props

    const handleSubmit = (event) => {
        event.preventDefault()
        if(search.length !== 0) {
            handleBtnSearch({books: search, startIndex: 0})
            history.push('search')
        }
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit} method="POST">
            <input type="text" value={search} onChange={e => handleInputSearch(e.target.value)} className={classes.input} />

            <button type="submit" className={classes.btn}>
                <SearchIcon style={{ color: "#6c63ff", fontSize: 22 }} />
            </button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    search: state.reducer.search_input
})

export default connect(mapStateToProps, {
    handleInputSearch,
    handleBtnSearch
})(InputSearch)
