import React from "react";
import {Link} from "react-router-dom";
import { professors} from "./data";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessors = () =>{
    function generateTable(){
        if(!professors){
            return ;
        }
        else{
            return professors.map((professor, i) =>{
                return <ProfessorTableRow professor={professor}></ProfessorTableRow>
            })
                
            
        }
    }

    return(
        <table class="table table-stripped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>University</th>
                    <th>Degree</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {generateTable()}
            </tbody>
        </table>
    )
}

export default ListProfessors;