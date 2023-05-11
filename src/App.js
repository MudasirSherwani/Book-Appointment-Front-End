import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Reservations from './components/reservation/Reservations';

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div>
          <div>
            <h3><b> Reservations</b></h3>
          </div>
        </div>
      </div>
      <Reservations />
    </div>
  );
}

export default App;
