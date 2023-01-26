## Tables:
I mainly brainstormed some possible fields and tables for our app, details need to be discussed.

### Users Table:

- Contains user information such as email, password, name, and login information.
- Columns include: user_id, email, password, first_name, last_name, created_at, updated_at, last_login_time, last_login_ip, is_admin, password_reset_token, status, deleted_at.

### Professors Table:

- Contains information about professors including name, email, department, and image.
- Columns include: professor_id, first_name, last_name, email, department_id, image, is_active, created_at, updated_at, deleted_at.

### Courses Table:

- Contains information about courses including name, description, prerequisites, and department.
- Columns include: course_id, course_name, description, prerequisites, department_id, created_at, updated_at, deleted_at.

### Departments Table:

- Contains information about departments including name, university, and created_at.
- Columns include: department_id, department_name, university_id, created_at, updated_at, deleted_at.

### Universities Table:

- Contains information about universities including name, city, state, and country.
- Columns include: university_id, university_name, city, state, country, created_at, updated_at, deleted_at.

### Professor Courses Table:

- Contains information about the courses that a professor is teaching including the professor's ID, course ID, semester, year, location, time, and whether the course is published.
- Columns include: professor_course_id, professor_id, course_id, semester, year, location, time, is_published, created_at, updated_at, deleted_at.

### Reviews Table:

- Contains information about reviews for professors and courses including the user ID, professor_course_id, rating_id, workload_id, comments_id, and whether the review is recommended, anonymous, and verified.
- Columns include: review_id, user_id, professor_course_id, rating_id, workload_id, comments_id, is_recommended, is_anonymous, is_verified, created_at, updated_at, deleted_at.

### Ratings Table:

- Contains information about ratings for professors and courses including instructor rating, course rating, easiness, created_at, and deleted_at.
- Columns include: rating_id, instructor_rating, course_rating, easiness, created_at, updated_at, deleted_at.

### Workloads Table:

- Contains information about workloads for professors and courses including workload hour, homework, projects, readings, quizzes_exams, created_at, and deleted_at.
- Columns include: workload_id, workload_hour, homework, projects, readings, quizzes_exams, created_at, updated_at, deleted_at.

### Comments Table:

- Contains comments about professors and courses including professor comments, course comments, thumbs up, thumbs down, created_at, and deleted_at.
- Columns include: comments_id, professor_comments, course_comments, thumbs_up, thumbs_down, created_at, updated_at, deleted_at.



## Relations describe:
- The users table has a one-to-many relationship with the reviews table. Each user can have multiple reviews, but each review can only be associated with one user.
- The professors table has a one-to-many relationship with the professor_courses table. Each professor can teach multiple courses, but each course can only be associated with one professor.
- The courses table has a one-to-many relationship with the professor_courses table. Each course can be taught by multiple professors, but each professor_course can only be associated with one course.
- The departments table has a one-to-many relationship with the courses table and professors table. Each department can have multiple courses and multiple professors, but each course and each professor can only be associated with one department.
- The universities table has a one-to-many relationship with the departments table. Each university can have multiple departments, but each department can only be associated with one university.
- The reviews table has a one-to-one relationship with the ratings, workloads, and comments table. Each review is associated with one rating, one workload, and one comment.
- The professor_courses table has a many-to-many relationship with the reviews table. Each professor_course can have multiple reviews and each review can be associated with multiple professor_courses.


## Possible Django apps/models

### Users app:
- 'users' model

### Professors app:
- 'professors' model

### Courses app:
- 'courses', 'departments', 'universities' models

### Reviews app:
- 'reviews', 'ratings', 'workloads', 'comments' models

### Professor_courses app:
- 'professor_courses' model