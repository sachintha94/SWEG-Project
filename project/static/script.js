// Courses data (Compulsory and Electives)
const courses = {
  "BSE": {
    compulsory: [
      { code: "EEX3467", title: "Software Engineering Concepts and Programming" },
      { code: "EEI3346", title: "Web Application Development" },
      { code: "EEI3262", title: "Introduction to Object Oriented Programming" },
      { code: "EEI3266", title: "Information Systems and Data Management" },
      { code: "EEX3373", title: "Communication and Computer Technology" },
      { code: "AGM3263", title: "Communication Skills" },
      { code: "MHZ3459", title: "Basic Mathematics for Computing" },
      { code: "EEI4346", title: "Web Technology" },
      { code: "EEI4267", title: "Requirement Engineering" },
      { code: "EEI4362", title: "Object Oriented Design" },
      { code: "EEX4465", title: "Data Structures and Algorithms" },
      { code: "MHZ4256", title: "Mathematics for Computing" },
      { code: "EEI4361", title: "User Experience Engineering" },
      { code: "EEI4366", title: "Data Modelling and Database Systems" },
      { code: "AGM4367", title: "Economics and Marketing for Engineers" },
      { code: "EEY4189", title: "Software Design in Group" },
      { code: "MHZ4377", title: "Applied Statistics" },
      { code: "EEI5467", title: "Software Testing and Quality Assurance" },
      { code: "EEI5270", title: "Information Security" },
      { code: "MHZ5375", title: "Discrete Mathematics" },
      { code: "EEX5563", title: "Computer Architecture and Operating Systems" },
      { code: "EEW5811", title: "Industrial Training – Software" },
      { code: "CVM5402", title: "Accounting for Engineers" },
      { code: "EEX5362", title: "Performance Modelling" },
      { code: "MHJ5372", title: "Technology, Society and Environment" },
      { code: "EEY6189", title: "Research Methodology and Project Identification" },
      { code: "DMM6601", title: "Management for Engineers" },
      { code: "EEI6360", title: "Software Project Management" },
      { code: "EEI6171", title: "Emerging Technologies" },
      { code: "EEI6567", title: "Software Architecture and Design" },
      { code: "EEM6202", title: "Professional Practice" },
      { code: "EEX6363", title: "Compiler Construction" },
      { code: "EEY6689", title: "Final Project – Software Engineering" }
    ],
    electives: [
      { code: "EEI3269", title: "Introduction to Mobile Application Development" },
      { code: "EEM3366", title: "Introduction to Business Studies" },
      { code: "EEI3372", title: "Programming in Python" },
      { code: "LLJ3265", title: "Introduction to Laws of Sri Lanka" },
      { code: "EEI4369", title: "Mobile Application Development for Android" },
      { code: "EEX4373", title: "Data Science" },
      { code: "MHJ4271", title: "History of Technology" },
      { code: "EEX5376", title: "Embedded Systems and Internet of Things" },
      { code: "EEX5464", title: "Data Communication and Networking" },
      { code: "EEI5280", title: "Creative Design" },
      { code: "EEI5466", title: "Advanced Database Systems" },
      { code: "EEX6340", title: "AI Techniques and Agent Technology" },
      { code: "EEX6278", title: "Neural Networks and Fuzzy Logic Applications" }
    ]
  }
};


// Grade to GPA mapping
const gradeToGPV = {
  "A+": 4.00, "A": 4.00, "A-": 3.70, "B+": 3.30, "B": 3.00,
  "B-": 2.70, "C+": 2.30, "C": 2.00, "C-": 1.70, "D": 1.00, "E": 0.00
};

const lowGrades = ["C-", "D", "E"];


// Event handler for degree selection
function onDegreeChange() {
  const degree = document.getElementById("degree").value;
  const coursesTableBody = document.getElementById("courses-table-body");
  const electiveSelect = document.getElementById("elective-select");
  const electiveCoursesBody = document.getElementById("elective-courses-body");
  document.getElementById("compulsory-header-row").style.display = "table-row";

  // Reset existing content
  coursesTableBody.innerHTML = '';
  electiveCoursesBody.innerHTML = '';
  electiveSelect.innerHTML = '<option value="">Select Elective Course</option>';

  if (degree && courses[degree]) {
      // Add compulsory courses to the table
      courses[degree].compulsory.forEach(course => {
          const row = document.createElement("tr");
          const courseCodeCell = document.createElement("td");
          courseCodeCell.innerText = course.code;
          const courseTitleCell = document.createElement("td");
          courseTitleCell.innerText = course.title;
          const resultCell = document.createElement("td");
          const gradeSelect = document.createElement("select");
          const grades = ["", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "E"];
          grades.forEach(grade => {
              const option = document.createElement("option");
              option.value = grade;
              option.innerText = grade === "" ? "-- Select Grade --" : grade;
              gradeSelect.appendChild(option);
          });


          resultCell.appendChild(gradeSelect);
          const actionCell = document.createElement("td");
          actionCell.innerHTML = "-"; // Placeholder for compulsory courses
          row.appendChild(courseCodeCell);
          row.appendChild(courseTitleCell);
          row.appendChild(resultCell);
          row.appendChild(actionCell);
          coursesTableBody.appendChild(row);
      });

      // Add electives to the dropdown
      courses[degree].electives.forEach(course => {
          const option = document.createElement("option");
          option.value = course.code;
          option.innerText = `${course.code} - ${course.title}`;
          electiveSelect.appendChild(option);
      });
  }
}

// Function to add elective course row
function addElectiveCourse() {
  const degree = document.getElementById("degree").value;
  const electiveSelect = document.getElementById("elective-select");
  const electiveCourseCode = electiveSelect.value;
  const electiveCourseTitle = electiveSelect.selectedOptions[0].text.split(" - ")[1];
  document.getElementById("elective-header-row").style.display = "table-row";


  if (!degree || !electiveCourseCode) {
      alert("Please select a degree and an elective course.");
      return;
  }

  const electiveCoursesBody = document.getElementById("elective-courses-body");

  // Create row for elective course
  const row = document.createElement("tr");

  const courseCodeCell = document.createElement("td");
  courseCodeCell.innerText = electiveCourseCode;

  const courseTitleCell = document.createElement("td");
  courseTitleCell.innerText = electiveCourseTitle;

  const resultCell = document.createElement("td");
  const gradeSelect = document.createElement("select");
  const grades = ["", "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "E"];
grades.forEach(grade => {
    const option = document.createElement("option");
    option.value = grade;
    option.innerText = grade === "" ? "-- Select Grade --" : grade;
    gradeSelect.appendChild(option);
});

  // const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "E"];
  // grades.forEach(grade => {
  //     const option = document.createElement("option");
  //     option.value = grade;
  //     option.innerText = grade;
  //     gradeSelect.appendChild(option);
  // });
  resultCell.appendChild(gradeSelect);

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => row.remove();
  actionCell.appendChild(deleteBtn);

  row.appendChild(courseCodeCell);
  row.appendChild(courseTitleCell);
  row.appendChild(resultCell);
  row.appendChild(actionCell);
  electiveCoursesBody.appendChild(row);
}

// Function to calculate GPA
function calculateGPA() {
  const courseData = {};
  const missingCompulsory = [];
  const failedCompulsory = [];
  const categorizedCredits = {
    total: 0,
    category: {},  // e.g., { Z: { total: 12, level5plus: 4 } }
  };
  const gradeToGPV = {
    "A+": 4.00, "A": 4.00, "A-": 3.70, "B+": 3.30, "B": 3.00,
    "B-": 2.70, "C+": 2.30, "C": 2.00, "C-": 1.70, "D": 1.00, "E": 0.00
  };

  const compulsoryRows = document.getElementById("courses-table-body").getElementsByTagName("tr");
  const electiveRows = document.getElementById("elective-courses-body").getElementsByTagName("tr");

  const warningDiv = document.getElementById("warning");
  warningDiv.style.display = "none";
  warningDiv.innerText = "";

  const lowGrades = ["C-", "D", "E"];

  const allCourses = [];

  // Process compulsory courses
  for (let row of compulsoryRows) {
    const code = row.cells[0].innerText;
    const title = row.cells[1].innerText;
    const grade = row.cells[2].getElementsByTagName("select")[0].value;

    if (grade === "") {
      missingCompulsory.push(`${code} - ${title}`);
    } else {
      if (lowGrades.includes(grade)) failedCompulsory.push(`${code} - ${title}`);
      courseData[code] = grade;
      allCourses.push({ code, grade, type: "compulsory" });

      const category = code[2];
      const level = parseInt(code[3]);
      const credit = parseInt(code[4]);
      categorizedCredits.total += credit;

      if (!categorizedCredits.category[category]) {
        categorizedCredits.category[category] = { total: 0, level5plus: 0 };
      }
      categorizedCredits.category[category].total += credit;
      if (level >= 5) categorizedCredits.category[category].level5plus += credit;
    }
  }

  // Process elective courses
  for (let row of electiveRows) {
    const code = row.cells[0].innerText;
    const title = row.cells[1].innerText;
    const grade = row.cells[2].getElementsByTagName("select")[0].value;

    if (grade !== "") {
      courseData[code] = grade;
      allCourses.push({ code, grade, type: "elective" });

      const category = code[2];
      const level = parseInt(code[3]);
      const credit = parseInt(code[4]);
      categorizedCredits.total += credit;

      if (!categorizedCredits.category[category]) {
        categorizedCredits.category[category] = { total: 0, level5plus: 0 };
      }
      categorizedCredits.category[category].total += credit;
      if (level >= 5) categorizedCredits.category[category].level5plus += credit;
    }
  }

  // Show missing/failed compulsory
  if (missingCompulsory.length > 0) {
    warningDiv.style.display = "block";
    warningDiv.innerText =
      "⚠️ You must complete the following compulsory course(s):\n\n" + missingCompulsory.join("\n");
    return;
  }

  if (failedCompulsory.length > 0) {
    warningDiv.style.display = "block";
    warningDiv.innerText =
      "🚫 You should repeat the following failed course(s):\n\n" + failedCompulsory.join("\n");
    return;
  }

  // Check total credits ≥ 130
  if (categorizedCredits.total < 130) {
    warningDiv.style.display = "block";
    warningDiv.innerText = `❌ You need a minimum of 130 credits. You currently have only ${categorizedCredits.total}.`;
    return;
  }

  // Category validation
  const cat = categorizedCredits.category;
  if (!cat["Z"] || cat["Z"].total < 12 || cat["Z"].level5plus < 3) {
    warningDiv.style.display = "block";
    warningDiv.innerText = "❌ Z (Maths) requires ≥12 credits, with ≥3 at Level 5 or above.";
    return;
  }

  const IX_total = (cat["I"]?.total || 0) + (cat["X"]?.total || 0);
  const IX_L5plus = (cat["I"]?.level5plus || 0) + (cat["X"]?.level5plus || 0);
  const IX_L6 = allCourses.filter(c => (["I", "X"].includes(c.code[2])) && parseInt(c.code[3]) === 6)
                          .map(c => parseInt(c.code[4]))
                          .reduce((a, b) => a + b, 0);

  if (IX_total < 65 || IX_total > 80 || IX_L5plus < 30 || IX_L6 < 15) {
    warningDiv.style.display = "block";
    warningDiv.innerText = `❌ I+X combined must be 65–80 credits total, ≥30 at L5/L6, including ≥15 at L6.`;
    return;
  }

  // All checks passed → select 70 credits for GPA
  const gpaCourses = [];

  // Sort priority: L5/L6 compulsory → L5/L6 elective → L4 compulsory
  const priority = allCourses
    .filter(c => ["4", "5", "6"].includes(c.code[3]))
    .filter(c => c.grade in gradeToGPV)
    .sort((a, b) => {
      const levelA = parseInt(a.code[3]);
      const levelB = parseInt(b.code[3]);
      if (["compulsory", "elective"].indexOf(a.type) !== ["compulsory", "elective"].indexOf(b.type)) {
        return a.type === "compulsory" ? -1 : 1;
      }
      return levelB - levelA; // Higher levels first
    });

  let gpaCreditSum = 0;
  for (let course of priority) {
    const credit = parseInt(course.code[4]);
    if (gpaCreditSum + credit <= 70) {
      gpaCourses.push(course);
      gpaCreditSum += credit;
    }
    if (gpaCreditSum >= 70) break;
  }

  const gpaInput = {};
  gpaCourses.forEach(c => gpaInput[c.code] = c.grade);

  // Send selected 70-credit courses to backend
  fetch("/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gpaInput)
  })
    .then(response => response.json())
    .then(data => {
      if (data.gpa !== undefined) {
        document.getElementById("result").innerHTML =
          `<strong>Your GPA:</strong> ${data.gpa.toFixed(2)}<br><strong>Classification:</strong> ${data.degree_class}`;
      } else {
        document.getElementById("result").innerText = "❌ Error: " + data.error;
      }
    });
}



// function calculateGPA() {
//   const courseData = {};
//   const missingCompulsory = [];
//   const failedCompulsory = [];
//   let totalCredits = 0;

//   const compulsoryRows = document.getElementById("courses-table-body").getElementsByTagName("tr");
//   const electiveRows = document.getElementById("elective-courses-body").getElementsByTagName("tr");

//   const warningDiv = document.getElementById("warning");
//   warningDiv.style.display = "none";
//   warningDiv.innerText = "";

//   const lowGrades = ["C-", "D", "E"];

//   // Check compulsory courses
//   for (let row of compulsoryRows) {
//     const courseCode = row.cells[0].innerText;
//     const courseTitle = row.cells[1].innerText;
//     const grade = row.cells[2].getElementsByTagName("select")[0].value;

//     if (grade === "") {
//       missingCompulsory.push(`${courseCode} - ${courseTitle}`);
//     } else {
//       courseData[courseCode] = grade;
//       if (lowGrades.includes(grade)) {
//         failedCompulsory.push(`${courseCode} - ${courseTitle}`);
//       }
//       totalCredits += parseInt(courseCode[4]); // 5th character = credits
//     }
//   }

//   // Check elective courses
//   for (let row of electiveRows) {
//     const courseCode = row.cells[0].innerText;
//     const grade = row.cells[2].getElementsByTagName("select")[0].value;

//     if (grade !== "") {
//       courseData[courseCode] = grade;
//       totalCredits += parseInt(courseCode[4]); // 5th character = credits
//     }
//   }

//   // Missing compulsory
//   if (missingCompulsory.length > 0) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = "⚠️ You must complete the following course(s) to calculate GPA:\n\n" + missingCompulsory.join("\n");
//     return;
//   }

//   // Failed compulsory
//   if (failedCompulsory.length > 0) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = "🚫 You should repeat the following course(s) next time before GPA is calculated:\n\n" + failedCompulsory.join("\n");
//     return;
//   }

//   // Total credit check
//   if (totalCredits < 130) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ You need a minimum of 130 total credits to proceed.\nYou currently have only ${totalCredits} credits.`;
//     return;
//   }

//   // CATEGORY-WISE VALIDATION
//   const categoryCredits = { I: 0, X: 0, M: 0, J: 0, Z: 0, Y: 0, L: 0, W: 0 };
//   const level5or6_I_X = [], level6_I_X = [], level5or6_M = [], level5or6_Z = [], level6_Y = [];

//   for (let code in courseData) {
//     const cat = code[2];
//     const lvl = parseInt(code[3]);
//     const cr = parseInt(code[4]);

//     if (categoryCredits[cat] !== undefined) {
//       categoryCredits[cat] += cr;

//       if ((cat === 'I' || cat === 'X') && (lvl === 5 || lvl === 6)) level5or6_I_X.push(cr);
//       if ((cat === 'I' || cat === 'X') && lvl === 6) level6_I_X.push(cr);
//       if (cat === 'M' && (lvl === 5 || lvl === 6)) level5or6_M.push(cr);
//       if (cat === 'Z' && (lvl === 5 || lvl === 6)) level5or6_Z.push(cr);
//       if (cat === 'Y' && lvl === 6) level6_Y.push(cr);
//     }
//   }

//   const IX_total = categoryCredits.I + categoryCredits.X;
//   const IX_level5or6 = level5or6_I_X.reduce((a, b) => a + b, 0);
//   const IX_level6 = level6_I_X.reduce((a, b) => a + b, 0);
//   if (IX_total < 65 || IX_level5or6 < 30 || IX_level6 < 15) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ I + X category requirements not met:\n` +
//       `- Total: ${IX_total}/65\n` +
//       `- Level 5 or 6: ${IX_level5or6}/30\n` +
//       `- Level 6: ${IX_level6}/15`;
//     return;
//   }

//   const M_total = categoryCredits.M;
//   const M_level5plus = level5or6_M.reduce((a, b) => a + b, 0);
//   if (M_total < 17 || M_level5plus < 12) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ Management (M) requirements not met:\n- Total: ${M_total}/17\n- Level 5/6: ${M_level5plus}/12`;
//     return;
//   }

//   const Z_total = categoryCredits.Z;
//   const Z_level5plus = level5or6_Z.reduce((a, b) => a + b, 0);
//   if (Z_total < 12 || Z_level5plus < 3) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ Mathematics (Z) requirements not met:\n- Total: ${Z_total}/12\n- Level 5/6: ${Z_level5plus}/3`;
//     return;
//   }

//   if (categoryCredits.J < 5) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ General (J) category requires at least 5 credits (you have ${categoryCredits.J})`;
//     return;
//   }

//   const Y_total = categoryCredits.Y;
//   const Y_level6 = level6_Y.reduce((a, b) => a + b, 0);
//   if (Y_total < 8 || Y_level6 < 6) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ Project (Y) requirements not met:\n- Total: ${Y_total}/8\n- Level 6: ${Y_level6}/6`;
//     return;
//   }

//   if (categoryCredits.W < 8) {
//     warningDiv.style.display = "block";
//     warningDiv.innerText = `❌ Industrial Training (W) must be exactly 8 credits (you have ${categoryCredits.W})`;
//     return;
//   }

//   // All checks passed → Calculate GPA
//   fetch("/calculate", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(courseData)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.gpa !== undefined) {
//         document.getElementById("result").innerText = "🎓 Your GPA: " + data.gpa.toFixed(2);
//       } else {
//         document.getElementById("result").innerText = "❌ Error: " + data.error;
//       }
//     });
// }







// function calculateGPA() {
//   const courseData = {};  // Store course codes and grades

//   // Get compulsory + elective course rows
//   const compulsoryRows = document.getElementById("courses-table-body").getElementsByTagName("tr");
//   const electiveRows = document.getElementById("elective-courses-body").getElementsByTagName("tr");

//   // Collect data from compulsory courses
//   for (let row of compulsoryRows) {
//     const courseCode = row.cells[0].innerText;
//     const grade = row.cells[2].getElementsByTagName("select")[0].value;
//     courseData[courseCode] = grade;
//   }

//   // Collect data from elective courses
//   for (let row of electiveRows) {
//     const courseCode = row.cells[0].innerText;
//     const grade = row.cells[2].getElementsByTagName("select")[0].value;
//     courseData[courseCode] = grade;
//   }

//   // Send data to Flask backend
//   fetch("/calculate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(courseData)
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.gpa !== undefined) {
//       document.getElementById("result").innerText = "Your GPA: " + data.gpa.toFixed(2);
//     } else {
//       document.getElementById("result").innerText = "Error: " + data.error;
//     }
//   });
// }



// function calculateGPA() {
//   let totalCredits = 0;
//   let totalPoints = 0;

//   const rows = document.getElementById("courses-table-body").getElementsByTagName("tr");

//   for (let row of rows) {
//       const grade = row.cells[2].getElementsByTagName("select")[0].value;
//       if (gradeToGPV[grade] !== undefined) {
//           totalCredits += 1; // Assume each course is 1 credit for simplicity
//           totalPoints += gradeToGPV[grade];
//       }
//   }

//   const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
//   document.getElementById("result").innerText = "Your GPA: " + gpa.toFixed(2);
// }

// Function to reset form
function resetForm() {
  // Reset dropdown selections
  document.getElementById("degree").value = '';
  document.getElementById("courses-table-body").innerHTML = '';
  document.getElementById("elective-courses-body").innerHTML = '';
  document.getElementById("elective-select").innerHTML = '<option value="">Select Elective Course</option>';

  // Clear GPA result
  document.getElementById("result").innerText = '';

  // Hide and clear warning message
  const warningDiv = document.getElementById("warning");
  warningDiv.style.display = "none";
  warningDiv.innerText = '';
}

// function resetForm() {
//   document.getElementById("degree").value = '';
//   document.getElementById("courses-table-body").innerHTML = '';
//   document.getElementById("elective-courses-body").innerHTML = '';
//   document.getElementById("elective-select").innerHTML = '<option value="">Select Elective Course</option>';
//   document.getElementById("result").innerText = '';
// }

// // Data for grading symbols and GPV values
// const gradingData = [
//   { grade: 'A', gpv: 4.0 },
//   { grade: 'B+', gpv: 3.5 },
//   { grade: 'B', gpv: 3.0 },
//   { grade: 'C+', gpv: 2.5 },
//   { grade: 'C', gpv: 2.0 },
//   { grade: 'D+', gpv: 1.5 },
//   { grade: 'D', gpv: 1.0 },
//   { grade: 'F', gpv: 0.0 }
// ];

// // Function to populate the grading table
// function populateGradingTable() {
//   const gradingTableBody = document.getElementById('grading-table').getElementsByTagName('tbody')[0];
//   gradingTableBody.innerHTML = '';
//   gradingData.forEach(item => {
//       const row = document.createElement('tr');
//       const gradeCell = document.createElement('td');
//       gradeCell.textContent = item.grade;
//       const gpvCell = document.createElement('td');
//       gpvCell.textContent = item.gpv;
//       row.appendChild(gradeCell);
//       row.appendChild(gpvCell);
//       gradingTableBody.appendChild(row);
//   });
// }
// window.onload = function() {
//   populateGradingTable();
// };
