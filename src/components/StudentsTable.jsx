const StudentsTable = ({ data }) => {
  const theadClasses = "py-2 px-4 border-b";
  const tdClasses = "py-2 px-4";
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className={theadClasses}>Name</th>
          <th className={theadClasses}>Date of Birth</th>
          <th className="py-2 px-4 border-b">Grade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((student) => (
          <tr key={student.id} className="border-b">
            <td
              className={tdClasses}
            >{`${student.first_name} ${student.last_name}`}</td>
            <td className={tdClasses}>{student.dob}</td>
            <td className={tdClasses}>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
