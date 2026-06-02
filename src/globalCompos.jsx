import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function GoHome (props) {
    return (
        <div className="goHome">
            <Link to="/">
                <FontAwesomeIcon
                    icon={faHouse}
                    style={{ color: "rgb(255, 212, 59)" }}
                />
            </Link>
        </div>
    );
}

export { GoHome };