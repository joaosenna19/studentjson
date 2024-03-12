import { useState } from "react";
import FormField from "./FormField";

const Form = () => {
  // CSS classes for form fields
  const formFieldClasses = "text-black mt-1 mb-2 p-1 ";

  // State to manage form data
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    grade: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    // Update the newStudent state with the changed input value
    setNewStudent({ ...newStudent, [e.target.id]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Reset form fields to empty strings
    setNewStudent({
      first_name: "",
      last_name: "",
      dob: "",
      grade: "",
    });

    // Send a POST request to the server with student data
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    // Log the submitted student data to the console
    console.log("Form submitted", newStudent);
  };

  return (
    // Form component JSX
    <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
      {/* FormField component for student's first name */}
      <FormField
        htmlFor={"first_name"}
        title={" First Name"}
        type={"text"}
        id={"first_name"}
        placeholder={"Enter  first name"}
        value={newStudent.first_name}
        onChange={handleChange}
        classes={formFieldClasses}
      />
      {/* FormField component for student's last name */}
      <FormField
        htmlFor={"last_name"}
        title={" Last Name"}
        type={"text"}
        id={"last_name"}
        placeholder={"Enter  last name"}
        value={newStudent.last_name}
        onChange={handleChange}
        classes={formFieldClasses}
      />

      {/* FormField component for student's date of birth */}
      <FormField
        htmlFor={"dob"}
        title={" DOB"}
        type={"date"}
        id={"dob"}
        value={newStudent.dob}
        onChange={handleChange}
        classes={formFieldClasses}
        min={"1920-01-01"}
        max={"2018-12-31"}
      />
      {/* FormField component for student's grade */}
      <FormField
        htmlFor={"grade"}
        title={" Grade"}
        type={"number"}
        id={"grade"}
        value={newStudent.grade}
        onChange={handleChange}
        classes={formFieldClasses}
        min={1}
        max={12}
      />

      {/* Submit button */}
      <button type="submit" className="bg-gray-700 rounded">
        Add
      </button>
    </form>
  );
};

export default Form;
