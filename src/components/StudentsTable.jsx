const StudentsTable = ({ data }) => {
  // CSS classes for table header and table data cells
  const theadClasses = "py-2 px-4 border-b";
  const tdClasses = "py-2 px-4";

  return (
    // Table element
    <table className="min-w-full">
      <thead>
        <tr>
          {/* Table headers */}
          <th className={theadClasses}>Name</th>
          <th className={theadClasses}>Date of Birth</th>
          <th className="py-2 px-4 border-b">Grade</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping over the data array to render table rows */}
        {data.map((student) => (
          <tr key={student.id} className="border-b">
            {/* Table data cells */}
            <td className={tdClasses}>{`${student.first_name} ${student.last_name}`}</td>
            <td className={tdClasses}>{student.dob}</td>
            <td className={tdClasses}>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
