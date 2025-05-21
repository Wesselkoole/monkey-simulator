import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useUserContext } from '../hooks/UserContext';
import { monkeyClicked } from '../actions/MonkeyActions';

const Clicker = () => {
    const userContext = useUserContext();

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <img className="img-fluid" src="src/images/monkey.png" alt="Monkey" onClick={() => monkeyClicked(userContext)} />
        </div>
    );
};

export default Clicker;
