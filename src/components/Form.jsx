import { useState } from "react";
import FormField from "./FormField";

const Form = () => {
  const formFieldClasses = "text-black mt-1 mb-2 p-1 ";

  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewStudent({
      first_name: "",
      last_name: "",
      dob: "",
      grade: "",
    });
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    console.log("Form submitted", newStudent);
  };

  return (
    <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
      <FormField
        htmlFor={"first_name"}
        title={"Student's First Name"}
        type={"text"}
        id={"first_name"}
        placeholder={"Enter student's first name"}
        value={newStudent.first_name}
        onChange={handleChange}
        classes={formFieldClasses}
      />
      <FormField
        htmlFor={"last_name"}
        title={"Student's Last Name"}
        type={"text"}
        id={"last_name"}
        placeholder={"Enter student's last name"}
        value={newStudent.last_name}
        onChange={handleChange}
        classes={formFieldClasses}
      />

      <FormField
        htmlFor={"dob"}
        title={"Student's DOB"}
        type={"date"}
        id={"dob"}
        value={newStudent.dob}
        onChange={handleChange}
        classes={formFieldClasses}
        min={"1920-01-01"}
        max={"2018-12-31"}
      />
      <FormField
        htmlFor={"grade"}
        title={"Student's Grade"}
        type={"number"}
        id={"grade"}
        value={newStudent.grade}
        onChange={handleChange}
        classes={formFieldClasses}
        min={1}
        max={12}
      />

      <button type="submit" className="bg-gray-700 rounded">
        Add
      </button>
    </form>
  );
};

export default Form;
