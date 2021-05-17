// libs 
import { Link } from 'react-router-dom'

// icons - img
import pagenotfound from '../../assets/pagenotfound.svg'

// components 
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// styles
import { useStyles } from './styles'

function PaginaNaoEncontrada() {

    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm" className={classes.root}>
            <CssBaseline />
            <img src={pagenotfound} className={classes.image} alt="404 Pagina não encontrada!!!" />
            <Typography component="h1" variant="h4">
                Pagina não encontrada
            </Typography>
            <br />
            <Typography>
                Volte para a <Link to="/" className={classes.link} >pagina principal.</Link>
            </Typography>
        </Container>
    )
}

export default PaginaNaoEncontrada
