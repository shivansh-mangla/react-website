import PropTypes from 'prop-types';

function List(props){
    const itemsList = props.items;
    const category = props.category;

    const listItems = itemsList.map(item => 
                    <li key={item.id}>{item.name}: &nbsp;
                    <b>{item.calories}</b></li>);


    return(
    <>
        <h2>{category}</h2>
        <ol>{listItems}</ol>
    </>);
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number}))
}

List.defaultProps = {
    items: [],
    category: "Category"
}

export default List