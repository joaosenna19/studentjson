"use client"; // Runs on the client-side

import { useEffect, useState } from "react";
import Form from "@/components/Form";
import StudentsTable from "@/components/StudentsTable";

export default function Home() {
  const [students, setStudents] = useState([]); // State to manage the list of students

  // Fetch students data from the server when the component mounts or when the 'students' state changes
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("http://localhost:5000/students", {
        // Fetch students from the server
        method: "GET", // Using GET method to retrieve data
        headers: { "Content-Type": "application/json" }, // Setting content type header
      });

      const students = await res.json(); // Extr5acting JSON data from the response

      setStudents(students); // Updating the 'students' state with the fetched data
    };

    fetchStudents(); // Call fetchStudents function
  }, []); // Dependency array: useEffect runs when 'students' state changes

  return (
    // Main component JSX
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <Form />
        <StudentsTable data={students} />
      </div>
    </main>
  );
}
