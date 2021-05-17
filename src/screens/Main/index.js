import React from 'react'
// redux
import { connect } from 'react-redux'
import {
    clearInputSearch
} from '../../store/actions'

// icons - img
import logo from '../../assets/logo.svg'

// components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import InputSearch from '../../components/InputSearch'

// styles
import { useStyles } from './styles'

function Main(props) {

    const classes = useStyles()

    const {
        search,
        // actions
        clearInputSearch
    } = props

    React.useEffect(() => {
        if(search.length) {
            clearInputSearch()
        }
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed className={classes.container}>
                <img src={logo} className={classes.image} alt="404 Pagina não encontrada!!!" />
                <InputSearch />
            </Container>
        </div>
    )
}


const mapStateToProps = (state) => ({
    search: state.reducer.search_input
})

export default connect(mapStateToProps, {
    clearInputSearch
})(Main)

