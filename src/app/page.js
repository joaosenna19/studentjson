"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("http://localhost:5000/students", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const students = await res.json();
      setStudents(students);
    };

    fetchStudents();
  }, [students]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Student Information</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-xl font-bold">{student.first_name}</p>
              <p className="text-lg">{student.last_name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
