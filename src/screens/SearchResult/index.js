import React from 'react'

// libs
import { Link } from 'react-router-dom'

// components
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import InputSearch from '../../components/InputSearch'
import CardBook from '../../components/CardBook'

// icons - img
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
};

function SearchResult(props) {
    return (
        <>
            <CssBaseline />

                <ElevationScroll {...props}>
                    <AppBar 
                        style={{ 
                            backgroundColor: '#f5f5f5', 
                            color: '#556', 
                            // boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)', 
                            padding: '0px 25px',
                            height: 100,
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottom: '1.8px solid #ddd' 
                        }}
                    >
                        <Link to="/">
                            <img 
                                src={logo} 
                                style={{ width: 85, height: 85 }} 
                                alt="logo" 
                            />
                        </Link>
                        <InputSearch />
                    </AppBar>
                </ElevationScroll>

                <br />
                <br />
                <br /> 
                <Toolbar />

                <Container maxWidth="md" >
                    <Box my={2}>
                        {
                            [...new Array(20)].map(() => <CardBook />)
                        }
                    </Box>
                </Container>
        </>
    )
}

export default SearchResult
