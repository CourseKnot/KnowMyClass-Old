CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login_ip VARCHAR(255) NOT NULL,
    is_admin ENUM('0','1') NOT NULL DEFAULT '0',
    password_reset_token VARCHAR(255),
    status ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    deleted_at TIMESTAMP
);

CREATE TABLE professors (
    professor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    department_id INT,
    image VARCHAR(255),
    is_active ENUM('0','1') NOT NULL DEFAULT '0',
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE courses (
    course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    description TEXT,
    prerequisites TEXT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL,
    university_id INT,
    FOREIGN KEY (university_id) REFERENCES universities(university_id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE universities (
    university_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE professor_courses (
    professor_course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    professor_id INT NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES professors(professor_id) ON DELETE CASCADE,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE,
    semester VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL,
    is_published ENUM('0','1') NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    professor_course_id INT NOT NULL,
    FOREIGN KEY (professor_course_id) REFERENCES professor_courses(professor_course_id) ON DELETE CASCADE,
    rating_id INT NOT NULL,
    FOREIGN KEY (rating_id) REFERENCES ratings(rating_id) ON DELETE CASCADE,
    workload_id INT NOT NULL,
    FOREIGN KEY (workload_id) REFERENCES workloads(workload_id) ON DELETE CASCADE,
    comments_id INT NOT NULL,
    FOREIGN KEY (comments_id) REFERENCES comments(comments_id) ON DELETE CASCADE,
    is_recommended ENUM('0','1') NOT NULL DEFAULT '0',
    is_anonymous ENUM('0','1') NOT NULL DEFAULT '0',
    is_verified ENUM('0','1') NOT NULL DEFAULT '0',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE ratings (
    rating_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    instructor_rating INT NOT NULL,
    course_rating INT NOT NULL,
    easiness INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE workloads (
    workload_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    workload_hour INT NOT NULL,
    homework INT NOT NULL,
    projects INT NOT NULL,
    readings INT NOT NULL,
    quizzes_exams INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE comments (
    comments_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    professor_comments TEXT NOT NULL,
    course_comments TEXT NOT NULL,
    thumbs_up INT NOT NULL,
    thumbs_down INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);
