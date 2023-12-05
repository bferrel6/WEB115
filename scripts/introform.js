
/* 
function courseForm() {
    const courseCountInput = document.getElementById('courseCount');
    let courseCount = parseInt(courseCountInput.value);
    const courseInputList = document.getElementById('courseInputList');
    document.getElementById('updateCourse').onclick = addCourseInputs(courseCount, courseInputList);
}

function addCourseInputs(count, mainDiv) {
    const defaultCourses = [
        [
            "WEB140 - Web Development Tools", 
            "Learn about Wordpress and IDEs."
        ],
        [
            "WEB115 - Web Markup and Scripting", 
            "Up the ante from the challenges of WEB110, and stretch reluctant creative muscles."
        ],
        [
            "CTS240 - Project Management", 
            "Pick up very useful habits & skills, whether I stay in construction or venture into IT."
        ],
        [
            "CSC121 - Python Programming",
            "Delve into the possibilities of logic manipulation."
        ]
    ];

    // generate course inputs
    for (let i = 0; i < count; i++) {
        // create div for each course
        const courseDiv = document.createElement('div');
        courseDiv.setAttribute('id', 'courses')
        mainDiv.append(courseDiv);

        // course code labels and inputs for each course
        const courseNameLabel = document.createElement('label');
        courseNameLabel.innerHTML = "Course Name " + (i + 1);
        courseNameLabel.setAttribute('for', `courseName${i + 1}`)
        courseDiv.append(courseNameLabel);
        const courseNameInput = document.createElement('input');
        courseNameInput.type = "text";
        courseNameInput.setAttribute('id', `courseName${i + 1}`)
        courseNameInput.size = "102"
        if (defaultCourses[i][0]) {
            courseNameInput.value = defaultCourses[i][0];
        } else {
            courseNameInput.value = '';
        }
        courseDiv.append(courseNameInput);

        // course description labels and inputs for each course
        const courseDescriptionLabel = document.createElement('label');
        courseDescriptionLabel.innerHTML = "Description";
        courseDescriptionLabel.setAttribute('for', `description${i + 1}`)
        courseDiv.append(courseDescriptionLabel);
        const courseDescriptionInput = document.createElement('input');
        courseDescriptionInput.type = "text";
        courseDescriptionInput.setAttribute('id', `description${i + 1}`)
        courseDescriptionInput.size = "102"
        if (defaultCourses[i][1]) {
            courseDescriptionInput.value = defaultCourses[i][1];
        } else {
            courseDescriptionInput.value = '';
        }
        courseDiv.append(courseDescriptionInput);
    }
}
*/    

document.getElementById('send').onclick = function formSubmit() {
    
    return false;
}
