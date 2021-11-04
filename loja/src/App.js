import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Struture/HeaderComponent';
import SlideShow from './components/Struture/SlideShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid className="p-0">

      <HeaderComponent></HeaderComponent>
      <SlideShow></SlideShow>

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
