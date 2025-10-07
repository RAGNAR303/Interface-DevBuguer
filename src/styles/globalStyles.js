import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/background1.png';

const globalStyles = createGlobalStyle`

* {
margin: 0;
padding: 0 ;
box-sizing: border-box;
outline: none;
 font-family: "M PLUS Rounded 1c", sans-serif;

}
button , a {
    cursor: pointer;
    text-decoration: none;
}

body{
 background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${background}');
     background-color: #121218ff;
 
     color: #fff;
}



`;

export default globalStyles;
