import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App container">
        <Header title="Galería de Imágenes con React" subtitle="Tipos de bicibleta" />
        <hr/>
        <div className='row'>
          <Cards img="https://cdn.pixabay.com/photo/2020/09/13/09/50/mountain-bike-5567847_1280.jpg" title="Bicicleta de montaña" text="Es un tipo de bicicleta diseñada para viajes por la montaña o el campo."  />
          <Cards img="https://images.pexels.com/photos/14367211/pexels-photo-14367211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title="Bicicleta de pista" text="Es una bicicleta de carreras optimizada para ser utilizada en un velódromo o pista al aire libre." />
          <Cards img="https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2022/05/19070939/Ivar-Slik-Wilier-Rave-SLR-gravel-race-bike-build_Traka-200-win-with-Miche-Graff-Route-aero-carbon-gravel-wheels.jpg" title="Bicicleta de grava" text="Son bicicletas que pueden andar prácticamente en cualquier lado, tanto sobre la ruta como en lugares no pavimentados." />
        </div>
      </div>
      <Footer desc="Se pueden identificar diferentes tipos de bicicletas según el uso, el entorno en el que se utilizan y alguna particularidad específica de funcionamiento. Dentro de cada categoría, también existen modelos diversos." />
    </>
  );
};

export default App;
