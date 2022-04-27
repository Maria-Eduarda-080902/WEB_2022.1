import { professors } from "./data";
import ListProfessors from "./ListProfessors";

function DeleteProfessor(professor){
    alert(professor);
    professors = professors.map(function (obj) {
        if (obj !== professor) {
            delete obj.name;
            delete obj.university;
            delete obj.degree;
        }
    }).filter(Boolean);

    return <ListProfessors></ListProfessors>
}

export default DeleteProfessor