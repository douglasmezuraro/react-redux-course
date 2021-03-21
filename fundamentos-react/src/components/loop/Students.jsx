import React from "react";
import StudentsList from "../../data/students";

const Students = () => {
    const style = {
        listStyle: "none",
    };

    const row = StudentsList.map(student => {
        return <li key={student.id}>
            Id: {student.id}; Name: {student.name}; Nota: {student.grade},
        </li>
    });

    return (
        <div>
            <ul style={style}>
                {row}
            </ul>
        </div>
    );
};

export default Students;
