let courses = JSON.parse(localStorage.getItem('courses')) || [];
let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

document.getElementById('upload-course')?.addEventListener('click', () => {
    const title = document.getElementById('course-title').value;
    const description = document.getElementById('course-description').value;

    if (title && description) {
        const course = { title, description };
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses)); 
        document.getElementById('upload-message').innerText = 'Course uploaded successfully!';
        document.getElementById('course-title').value = '';
        document.getElementById('course-description').value = '';
    } else {
        document.getElementById('upload-message').innerText = 'Please fill in all fields.';
    }
});

document.getElementById('enroll-course')?.addEventListener('click', () => {
    const selectedCourse = document.getElementById('course-select').value;

    if (selectedCourse) {
        enrolledCourses.push(selectedCourse);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses)); 
        document.getElementById('enroll-message').innerText = 'Enrolled successfully!';
        updateProgress();
    } else {
        document.getElementById('enroll-message').innerText = 'Please select a course.';
    }
});

function populateCourseSelect() {
    const courseSelect = document.getElementById('course-select');
    courseSelect.innerHTML = '';
    courses.forEach((course) => {
        const option = document.createElement('option');
        option.value = course.title;
        option.textContent = course.title;
        courseSelect.appendChild(option);
    });
}

function updateProgress() {
    const progressList = document.getElementById('progress-list');
    progressList.innerHTML = '';
    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        progressList.appendChild(li);
    });
}

if (document.getElementById('course-select')) {
    populateCourseSelect();
}
