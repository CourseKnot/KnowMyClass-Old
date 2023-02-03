import React, { Component } from "react";
import "./App.css"


class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      courses: [],
      selectedDepartment: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/departments/");
      const departments = await res.json();
      this.setState({ departments });
    } catch (e) {
      console.log(e);
    }
  }

  handleDepartmentClick = async department => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/courses/?department=${department.department_id}`
      );
      const courses = await res.json();
      this.setState({ courses, selectedDepartment: department });
    } catch (e) {
      console.log(e);
    }
  };

  renderDepartments = () => {
    return this.state.departments.map(department => (
      <li
        key={department.department_id}
        className="list-group-item"
        onClick={() => this.handleDepartmentClick(department)}
      >
        {department.department_name}
      </li>
    ));
  };

  renderCourses = () => {
    return this.state.courses
      .filter(course => course.department === this.state.selectedDepartment.department_id)
      .map(course => (
        <li key={course.course_id} className="list-group-item">
          <h3>{course.course_name}</h3>
          <p>{course.description}</p>
          <p>Prerequisites: {course.prerequisites}</p>
          <p>Department: {this.state.selectedDepartment.department_name}</p>
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
        <h2>Departments</h2>
        <ul className="list-group">{this.renderDepartments()}</ul>
        {this.state.selectedDepartment && (
          <React.Fragment>
            <h2>Courses</h2>
            <ul className="list-group">{this.renderCourses()}</ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default CourseList;
