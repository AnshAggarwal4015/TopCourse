import React, { useState } from "react";
import Card from "./Card";
export const Cards = (props) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const courses = props.courses;
  const category = props.category;
  let allCourse = [];
  Object.values(courses).forEach((array) => {
    array.forEach((courseData) => {
      allCourse.push(courseData);
    });
  });

  function getCourses() {
    if (category === "All") {
      return allCourse;
    } else return courses[category];
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
