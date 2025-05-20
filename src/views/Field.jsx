import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { generateForest, changeForestHeight } from '../actions/TreeActions.jsx';
import { useUserContext } from '../hooks/UserContext';

export function Field() {
    const userContext = useUserContext();
    return (
        <>
            <div id="forestContainer" className="h-100">
                <div id="forest" className="row h-100">
                    {generateForest(userContext)}
                </div>
            </div>
        </>
    );
};

export default Field;
