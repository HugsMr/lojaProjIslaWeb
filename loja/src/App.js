import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Struture/HeaderComponent';
import SlideShow from './components/Struture/SlideShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {useSelector} from 'react-redux';
import LoginForm   from './components/Struture/LoginForm';

 
function App() {

  const isLogged = useSelector(state => state.loggedIn);

  return (
    <Container fluid className="p-0">

      
      <HeaderComponent></HeaderComponent>
      {isLogged ?  <SlideShow></SlideShow> : <LoginForm></LoginForm>}
     

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

    </Container>
  );
}

export default App;
