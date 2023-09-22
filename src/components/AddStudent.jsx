import { useState } from "react";

const AddStudent = () => {
  const getStudents = () => {
    const apiUrl = "http://127.0.0.1:8000/lict/students/";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        if (error.name === "TypeError") {
          console.error("Network error:", error.message);
        } else {
          console.error("Fetch error:", error.message);
        }
      });
  };

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
      <h1 className="text-lg m-4 text-center">Add a New Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block" htmlFor="name">
            Student Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded p-1"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block" htmlFor="faculty">
            Faculty:
          </label>
          <input
            type="text"
            id="faculty"
            className="w-full border rounded p-1"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block" htmlFor="semester">
            Semester:
          </label>
          <select
            id="semester"
            className="w-full border rounded p-1"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
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
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded p-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block" htmlFor="phone">
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            className="w-full border rounded p-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block" htmlFor="regNo">
            Reg No:
          </label>
          <input
            type="text"
            id="regNo"
            className="w-full border rounded p-1"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-30 h-10 bg-sky-400 hover:bg-sky-600 text-white font-bold p-1 rounded transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={getStudents}
          className="ml-4 w-30 h-10 bg-green-400 hover:bg-green-600 text-white font-bold p-1 rounded transition duration-300"
        >
          Or Get All Students?
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
