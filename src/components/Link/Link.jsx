const Link = ({ route }) => {
    return (
        <li className="mr-6">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

// prevent propType error
// Link.propTypes=

export default Link;