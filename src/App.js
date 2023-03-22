import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data.js";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Network Error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filters
            category={category}
            setCategory={setCategory}
            filterData={filterData}
          />
        </div>
        <div>
          <Cards category={category} courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default App;
