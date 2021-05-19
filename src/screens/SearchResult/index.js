import React from 'react'
// libs
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import {
    handlePagination
} from '../../store/actions'

// components
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Pagination from '@material-ui/lab/Pagination'
import Grid from '@material-ui/core/Grid'
import InputSearch from '../../components/InputSearch'
import CardBook from '../../components/CardBook'

// icons - img
import logo from '../../assets/logo.svg'

// styles
import { useStyles } from './styles'

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

function SearchResult(props) {

    const classes = useStyles()

    const {
        data,
        pagination,
        page,
        search,
        // actions
        handlePagination
    } = props

    return (
        <>
            <CssBaseline />

                <ElevationScroll {...props}>
                    <AppBar className={classes.appBar}>
                        <Link to="/">
                            <img 
                                src={logo} 
                                className={classes.image}
                                alt="logo" 
                            />
                        </Link>
                        <InputSearch />
                    </AppBar>
                </ElevationScroll>

                <div style={{ height: 60 }} />
                <Toolbar />

                <Container maxWidth="md" >
                    <Box my={2}>
                        { data.items ? data.items.map((el, index) => (
                            <CardBook key={index} data={el} />
                        )) : ''}
                    </Box>
                    <Grid item xs={12} className={classes.contentPagination} >
                        {
                            (pagination !== 0) ? (
                                <Pagination 
                                    count={pagination} 
                                    size="small" 
                                    shape="rounded" 
                                    color="primary"
                                    page={page}
                                    onChange={e => handlePagination({ page: e.target.innerText, book: search })}
                                />
                            ) : ''
                        }
                        
                    </Grid>
                </Container>    
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.reducer.books_data,
    pagination: state.reducer.total_pagination,
    page: state.reducer.page_number,
    search: state.reducer.search_input,
})


export default connect(mapStateToProps, {
    handlePagination
})(SearchResult)