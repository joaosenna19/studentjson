import { useState } from "react";

const Form = () => {
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.id]: e.target.value });
    console.log(newStudent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", newStudent);
    setNewStudent({
      first_name: "",
      last_name: "",
      dob: "",
      grade: "",
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="first">Student's First Name</label>
      <input
        type="text"
        id="first_name"
        placeholder="Enter student's first name"
        value={newStudent.first_name}
        onChange={handleChange}
        className="text-black"
      />
      <label htmlFor="last">Student's Last Name</label>
      <input
        type="text"
        id="last_name"
        placeholder="Enter student's last name"
        value={newStudent.last_name}
        onChange={handleChange}
        className="text-black"
      />
      <label htmlFor="dob">Student's DOB</label>
      <input
        type="date"
        id="dob"
        value={newStudent.dob}
        onChange={handleChange}
        className="text-black"
      />
      <label htmlFor="grade">Student's Grade</label>
      <input
        type="number"
        id="grade"
        value={newStudent.grade}
        onChange={handleChange}
        className="text-black"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
