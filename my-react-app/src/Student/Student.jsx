import styles from './Student.module.css'
import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className={styles.studentCard}>
            <p><span>Name:</span> {props.name}</p>
            <p><span>Age:</span> {props.age}</p>
            <p><span>Student:</span>  {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//adding default props
Student.defaultProps = {
    name: "Guest",
    age:0,
    isStudent: false
}
export default Student