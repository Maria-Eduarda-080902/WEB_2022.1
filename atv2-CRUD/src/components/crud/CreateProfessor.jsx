import React, {useState} from "react";
import Link from "react-router-dom";
import { professors } from "./data";

function CreateProfessor(){
        const [name, setName] = useState("");
        const [university, setUniversity] = useState("");
        const [degree, setDegree] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            professors.push({name, university, degree});
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" value={(name==null || name===undefined) ? "" : name} name="name" onChange={(event)=>setName(event.target.value)}></input>
                    </div>
                    <div class="form-group">
                        <label>University</label>
                        <input type="text" class="form-control" value={(university==null || university===undefined) ? "" : university} name="university" onChange={(event)=>setUniversity(event.target.value)}></input>
                    </div>
                    <div class="form-group">
                        <label>Degree</label>
                        <input type="text" class="form-control" value={(degree==null || degree===undefined) ? "" : degree} name="degree" onChange={(event)=>setDegree(event.target.value)}></input>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Create"></input>
                    </div>
                </form>
            </div>
        );
    }

export default CreateProfessor;