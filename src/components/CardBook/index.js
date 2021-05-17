// libs
import { Link } from 'react-router-dom'

// components
import Typography from '@material-ui/core/Typography';

// icons - img
import img from '../../assets/mockimg.jpeg'

// styles
import { useStyles } from './styles'

function CardBook() {

    const classes = useStyles()

    return (
        <div className={classes.root}>

            <div style={{ flex: 3 }} className={classes.contentImg}>
                <img src={img} style={{ height: 140 }} alt="capa book" />
            </div>

            <div style={{ flex: 9, padding: "10px 30px 10px 25px"  }} clssName={classes.contentText}>

                <Link style={{ textDecoration: 'none', color: '#6c63ff' }} to="/details">
                    <Typography variant="h5" component="h2">
                        Harry Potter e o calice de fogo
                    </Typography>
                </Link>

                <Typography variant="csubtitle2"  gutterBottom>
                   <Link style={{ textDecoration: 'none', color: '#6c63ff' }}>J.K Rowling</Link> · 2015
                </Typography>

                <Typography variant="body2" gutterBottom>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Corporis rem quasi veniam repudiandae debitis quam iure. 
                   Harum necessitatibus omnis laborum architecto optio, 
                   odio error consequatur ratione libero molestiae, illum laboriosam?
                </Typography>
            </div>
        </div>
    )
}

export default CardBook
