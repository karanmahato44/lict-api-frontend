import useFetchData from "../hooks/UseFetchData";
import StudentList from "./StudentList";
import PieChart from "./PieChart";
import AddStudent from "./AddStudent";

const BodyContent = () => {

  const { data: students, isLoading, error } = useFetchData('http://127.0.0.1:8000/lict/students');

  return (
    <>
      <div className="border border-red-400 flex flex-col md:grid grid-cols-2 mx-20 place-items-center place-content-center">
        <div className="border flex items-center justify-center h-full w-3/5">
          <AddStudent />
        </div>

        <div className="border flex items-center justify-center h-full w-4/5">
          <PieChart />
        </div>
      </div>


      <div className="border border-green-400 mx-20 text-center">
        <h2 className="font-bold my-5 text-xl">All Students</h2>
        {error && <div>{error.message}</div>}
        {isLoading && <div>Loading...</div>}
        {students && <StudentList students={students} />}
      </div>

    </>
  );
};

export default BodyContent;
