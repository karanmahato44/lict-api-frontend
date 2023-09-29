const StudentList = ({ students }) => {

  return (
    students.map(item => (
      <div key={item.id} className="border">
        <span>{item.student_name}</span>
      </div>
    ))

  );
};

export default StudentList;