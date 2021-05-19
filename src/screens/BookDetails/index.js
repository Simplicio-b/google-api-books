import React from 'react'

// libs
import { Link, useHistory } from 'react-router-dom'

// redux
import { connect } from 'react-redux'

// components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

// styles
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useStyles } from './styles'

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
}
  
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}

function BookDetails(props) {
    const matches = useMediaQuery('(min-width:600px)')
    const classes = useStyles()

    const history = useHistory()

    const {
        preview_data 
    } = props

    React.useEffect(() => {
        if(preview_data === null) {
            history.push('search')
        }
    })

    return (
        <>
            <CssBaseline />

                <ElevationScroll {...props}>
                    <AppBar className={classes.appBar}>
                        <div style={{paddingTop: 10}}>
                            <Link to="/search">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <ArrowBackIcon style={{ fontSize: 30, color: '#6c63ff' }} />
                                </IconButton>
                            </Link>
                        </div>
                        <div className={classes.contentHeader} style={{ paddingLeft: matches ? '' : 0 }}>
                            <div className={classes.contentHeaderTitle}>
                                <Typography component="h1" variant="h5">
                                    {preview_data.volumeInfo.title}
                                </Typography>
                                <Typography component="subtitle2">
                                    Por <span style={{ color: '#6c63ff' }}>{preview_data.volumeInfo.authors.toString().replace(/,/ig, ", ")}</span>
                                    <b> · </b>
                                    {preview_data.volumeInfo.publishedDate}
                                </Typography>
                            </div>
                        </div>
                    </AppBar>
                </ElevationScroll>

                <div style={{ height: matches ? 120 : 160 }} />
                <Toolbar />                        

                <Container maxWidth="md">
                    <Grid container spacing={3}>  

                        <Grid item xs={12} >
                            <Typography component="h3" variant="h5">
                                Resumo
                            </Typography>
                            <Paper style={{ padding: 10, marginTop: 10 }}>
                                <Typography variant="subtitle1">
                                    {
                                        preview_data.searchInfo ? 
                                        preview_data.searchInfo.textSnippet.replace(/<(.|\n)*?>/ig, '') 
                                        : 
                                        preview_data.volumeInfo.description ? 
                                        preview_data.volumeInfo.description : '' 
                                    }
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} >
                            <Typography component="h3" variant="h5">
                                Categorias
                            </Typography>
                            <Grid style={{ padding: 10 }}>
                                
                                {
                                   preview_data.volumeInfo && preview_data.volumeInfo.categories ?
                                   preview_data.volumeInfo.categories.map(e => (
                                            <Chip 
                                                label={e}
                                                variant="outlined" 
                                                style={{ borderColor: '#6c63ff', backgroundColor: '#6c63ff', color:"#FFF" }} 
                                            />
                                        )
                                    ) : ''
                                }
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} >
                            <Typography component="h3" variant="h5">
                                Informações de compra
                            </Typography>
                            <Paper style={{ padding: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex' }} >
                                    <img src={preview_data.volumeInfo.imageLinks.thumbnail} alt="capa do livro"/>
                                    <div style={{ paddingLeft: 15, paddingTop: 8 }}>
                                        <Typography variant="subtitle1">
                                            {preview_data.volumeInfo.title}
                                        </Typography>
                                        <Typography variant="subtitle2" style={{ marginBottom: 12 }}>
                                            Por <span style={{ color: '#6c63ff' }}>{preview_data.volumeInfo.authors.toString().replace(/,/ig, ", ")}</span>
                                        </Typography>
                                        <span>
                                            <b>
                                                <a 
                                                    style={{ textDecoration: 'none', color: '#6c63ff' }} 
                                                    target="_blank" href={preview_data.accessInfo.webReaderLink} rel="noreferrer" 
                                                >
                                                    Mais sobre o livro
                                                </a>
                                            </b>
                                        </span> 
                                        <hr />
                                        <Typography variant="subtitle2" style={{ color: '#aada00' }}>
                                            <b>Preço: </b>
                                            <span>
                                                {preview_data.saleInfo.listPrice ? preview_data.saleInfo.listPrice.amount + ' - ': 'Não está a venda'}
                                                {preview_data.saleInfo.listPrice ? preview_data.saleInfo.listPrice.currencyCode : ''}
                                            </span>
                                        </Typography>

                                    </div>
                                </div>
                            </Paper>

                        </Grid>
                    </Grid>
                </Container>
        </>
    )
}

const mapStateToProps = (state) => ({
    preview_data: state.reducer.preview_data
})

export default connect(mapStateToProps, {})(BookDetails)
