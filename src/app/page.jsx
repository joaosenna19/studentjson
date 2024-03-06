"use client";

import { useEffect, useState } from "react";
import Form from "@/components/Form";
import StudentsTable from "@/components/StudentsTable";
import Footer from "@/components/Footer";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <Form />
        <StudentsTable data={students} />
      </div>
    </main>
  );
}
