import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import UseState from "./hooks/UseState";

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(response.data.data);
    setData(response.data.data);
  };

  const EmployeeSalaryTotal = () => {
    return data.reduce((acc, item) => acc + item.employee_salary, 0);
  };

  console.log(EmployeeSalaryTotal());
  return (
    <div className="App">
      {display ? (
        <table>
          <thead>
            <tr>
              <th className="border-2">id</th>
              <th className="border-2">Employee Name</th>
              <th className="border-2">Employee Salary</th>
              <th className="border-2">Employee Age</th>
              {/* <th className="border-2">Profile Image</th> */}
            </tr>

            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-2">{item.id}</td>
                <td className="border-2">{item.employee_name}</td>
                <td className="border-2">{item.employee_salary}</td>
                <td className="border-2">{item.employee_age}</td>
              </tr>
            ))}
            <tr>
              <td className="w-full border-2"></td>
              <td className="w-full border-2">Total</td>
              <td className="w-full border-2">{EmployeeSalaryTotal()}</td>
              <td className="w-full border-2"></td>
            </tr>
          </thead>
        </table>
      ) : null}
      <button onClick={() => setDisplay(!display)}>Click me</button>
    </div>
  );
}

export default App;
