import { Link } from 'react-router-dom';

import logo from '../images/logo.png'
import styled from 'styled-components';


const Logo = () => {
    return ( 
        <Container>
            <Link to="/"><img src={logo} alt="Logo Satsi"/></Link>
        </Container>
    );
}
 
const Container = styled.div`
    z-index: 2;
    text-align: center;
    height: 9rem;
    background-color: ${props => props.theme.colors.text};
    
    & img{
        height: 9rem;
    }

    a{
        background-color: ${props => props.theme.colors.text};
    }

    @media screen and (max-width: 838px){
        display: none;
    }
`
export default Logo;