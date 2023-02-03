import React, { Component } from "react";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/courses/");
      const courses = await res.json();
      this.setState({ courses });
    } catch (e) {
      console.log(e);
    }
  }

  renderCourses = () => {
    return this.state.courses.map(course => (
      <li key={course.course_id} className="list-group-item">
        <h3>{course.course_name}</h3>
        <p>{course.description}</p>
        <p>Prerequisites: {course.prerequisites}</p>
        <p>Department: {course.department}</p>
        <p>
          Created At: {new Date(course.created_at).toLocaleString()}
          <br />
          Updated At: {new Date(course.updated_at).toLocaleString()}
        </p>
      </li>
    ));
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Courses</h2>
        <ul className="list-group">{this.renderCourses()}</ul>
      </div>
    );
  }
}

export default CourseList;
