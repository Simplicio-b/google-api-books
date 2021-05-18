// libs
import { Link } from 'react-router-dom'

// components
import Typography from '@material-ui/core/Typography';

// icons - img
import img from '../../assets/mockimg.jpeg'

// styles
import { useStyles } from './styles'

function CardBook({ data }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>

            <div style={{ flex: 3 }} className={classes.contentImg}>
                <img src={data.volumeInfo.imageLinks.thumbnail} style={{ height: 140 }} alt="capa book" />
            </div>

            <div style={{ flex: 9, padding: "10px 30px 10px 25px"  }} clssName={classes.contentText}>

                <Link style={{ textDecoration: 'none', color: '#6c63ff' }} to="/details">
                    <Typography variant="h5" component="h3">
                        {data.volumeInfo.title}
                    </Typography>
                </Link>

                <Typography variant="subtitle2"  gutterBottom>
                    <span style={{ color: '#6c63ff' }}>
                        {data.volumeInfo.authors ? data.volumeInfo.authors.toString().replace(/,/g, ', ') : ''}
                    </span>
                    {' ' + data.volumeInfo.publishedDate}
                </Typography>

                <Typography variant="body2" gutterBottom>
                    {data.searchInfo.textSnippet.replace(/<(.|\n)*?>/ig, '')}
                </Typography>
            </div>
        </div>
    )
}

export default CardBook
