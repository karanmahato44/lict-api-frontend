import { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [semester, setSemester] = useState("1");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, faculty, semester, email, phone, regNo);
  };

  return (
    <div className="w-80 py-5">
      <h2 className="text-lg m-4 text-center">Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Student Name: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block">Faculty: </label>
          <input
            type="text"
            required
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block">Semester: </label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full border rounded p-1"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block">Phone: </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block">Reg No: </label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>

        <button
          type="submit"
          className="w-30 h-10 bg-sky-400 hover:bg-sky-600 text-white font-bold p-1 rounded transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
