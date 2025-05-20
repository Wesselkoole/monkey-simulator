import './App.css';
import Nav from "./views/Nav.jsx";
import Clicker from "./views/Clicker.jsx";
import Field from "./views/Field.jsx";
import Upgrades from "./views/Upgrades.jsx";

function App() {
  return (
      <>
          <div className="container-fluid">
              <div className="row">
                  <Nav />
              </div>
              <div className="row">
                  <div className="col-md-3 mt-5">
                    <Clicker />
                  </div>
                  <div className="col-md-6">
                      <Field />
                  </div>
                  <div className="col-md-3">
                      <Upgrades />
                  </div>
              </div>
      </div>

      </>
  );
}

export default App;
