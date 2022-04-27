import React from "react";
import {Link} from "react-router-dom";
import {professors} from "./data.js"

const ProfessorTableRow = ({professor}) => {
    const {name, university, degree} = professor;
    return(
        <tr>
            <td>{name}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td colSpan={2}>
                <Link class="btn btn-primary" to={`/EditProfessor/${name}`}>Edit</Link>
                <Link class="btn btn-danger" to={`/DeleteProfessor/${professor}`}>Delete</Link>
            </td>
        </tr>
    )
}

export default ProfessorTableRow;