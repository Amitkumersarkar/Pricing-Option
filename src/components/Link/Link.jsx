import PropTypes from 'prop-types';
const Link = ({ route }) => {
    return (
        <li className="m-2 px-6 hover:bg-red-600">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

// prevent propType error
Link.propTypes = {
    route: PropTypes.object
}

export default Link;