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
import Grid from '@material-ui/core/Grid'

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
                <Grid item xs={12} className={classes.contentLogo}>
                    <img src={logo} className={classes.image} alt="logo" />
                </Grid>
                <Grid item xs={12} className={classes.contentInput}>
                    <InputSearch />
                </Grid>
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

