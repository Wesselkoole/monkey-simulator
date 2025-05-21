import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from '../hooks/UserContext';

export function Field() {
    const userContext = useUserContext();

    return (
        <>
            <div id="forestContainer" className="h-100">
                <div id="forest" className="row h-100">
                    {Array.from({ length: userContext.gameData.trees }).map((_, i) =>
                        <div className="col-md-3 tree">
                            <div className="bananasContainer">
                                <img className="bananas" alt="bananas" src="src/images/bananen.png" />
                                <img className="bananas inverted-image" alt="bananas" src="src/images/bananen.png" />
                            </div>

                            <div className="tree-body">
                                <img className="leaves" alt="leaves" src="src/images/bladeren.png" />
                                    {Array.from({ length: userContext.gameData.maxTreeClimbHeight }).map((_, i) => <img
                                        key={`bark-${i}`}
                                        className="bark"
                                        alt="bark"
                                        src="src/images/midden.png"
                                    />)}
                                <img className="root anchored-root" alt="root" src="src/images/bodem.png" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Field;
