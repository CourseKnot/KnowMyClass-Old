# db_schema_temp

### Users table:
- id (primary key, auto-increment)
- username (string, unique)
- email (string, unique)
- password (hashed)
- created_at (datetime)

### Professors table:
- id (primary key, auto-increment)
- first_name (string)
- last_name (string)
- department (string)
- university (string)
- created_at (datetime)

### Courses table:
- id (primary key, auto-increment)
- name (string)
- code (string)
- department (string)
- level (string)
- professor_id (foreign key referencing Professors table)
- created_at (datetime)

### Syllabus table:
- id (primary key, auto-increment)
- course_id (foreign key referencing Courses table)
- professor_id (foreign key referencing Professors table)
- semester (string)
- year (integer)
- syllabus (longtext)
- created_at (datetime)

### Ratings table:
- id (primary key, auto-increment)
- user_id (foreign key referencing Users table)
- course_id (foreign key referencing Courses table)
- professor_id (foreign key referencing Professors table)
- rating (integer)
- difficulty (integer)
- workload (integer)
- comment (string)
- created_at (datetime)

### Comments table:
- id (primary key, auto-increment)
- user_id (foreign key referencing Users table)
- course_id (foreign key referencing Courses table)
- professor_id (foreign key referencing Professors table)
- semester (string)
- year (integer)
- comment (string)
- created_at (datetime)