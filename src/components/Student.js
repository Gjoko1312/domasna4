import PropTypes from "prop-types";

export const Student = ({ students }) => {
    console.log(students);
    return (
            <div>
                <h1>Students</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.index}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
    )
    
};

Student.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
};