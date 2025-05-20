import './App.css';
import Nav from "./views/Nav.jsx";
import Clicker from "./views/Clicker.jsx";
import Field from "./views/Field.jsx";
import Upgrades from "./views/Upgrades.jsx";
import { UserContextProvider } from './hooks/UserContext';
import { PowerUpProvider } from './hooks/PowerUpContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <PowerUpProvider>
          <div className="container-fluid vh-100 d-flex flex-column">
            <div className="row flex-shrink-0">
              <Nav />
            </div>
            <div className="row flex-grow-1 overflow-hidden">
              <div className="col-md-3 bg-warning">
                <Clicker />
              </div>
              <div className="col-md-6 bg-success">
                <Field />
              </div>
              <div className="col-md-3 bg-warning">
                <Upgrades />
              </div>
            </div>
          </div>
        </PowerUpProvider>
      </UserContextProvider>


    </>
  );
}

export default App;
