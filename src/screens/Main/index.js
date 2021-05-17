// icons - img
import logo from '../../assets/logo2.svg'

// components
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import InputSearch from '../../components/InputSearch'

// styles
import { useStyles } from './styles'

function Main() {

    const classes = useStyles()

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

export default Main
