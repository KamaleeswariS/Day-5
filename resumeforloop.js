let resume = {
  "name": "Kamaleeswari S",
  "age": 24,
  "email": "princykamalikumar@gmail.com",
  "phone": "8056304078",
  "skills": ["HTML", "CSS", "JAVA"],
  "companies": [
    {
      "name": "NewsTN",
      "from": "2021",
      "to": "2022"
    },
    {
      "name": "Skatt",
      "from": "2022",
      "to": "2023"
    }
  ],
  "father_name": "SIVAKUMAR P",
  "education": [
    {
      "degree": "B.E (ECE)",
      "institution": "JCT College of Engineering & Technology, Coimbatore",
      "year_of_passing": "2021",
      "percentage": "73"
    },
    {
      "degree": "HSC",
      "institution": "Government higher Secondary School",
      "year_of_passing": "2017",
      "percentage": "69"
    },
    {
      "degree": "SSLC",
      "institution": "Government High School",
      "year_of_passing": "2015",
      "percentage": "87"
    }
  ],
  "technical_expertise": {
    "operating_systems": "Windows",
    "languages": ["C", "C++", "Javascript"],
    "software": "Microsoft Office"
  },
  "area_of_interest": [
    "Digital marketing",
    "Media",
    "Wireless network"
  ],
  "interpersonal_skills": "Excellent team player, innovative, administrative and quick learner. Extremely interested in new technologies, ideas and learning, planning",
  "extra_curricular_activities": [
    "Article writing",
    "Content writing",
    "Editing",
    "Making vlog"
  ],
  "project_details": [
    {
      "title": "Medical Assistant Robot ARM for covid-19 patients treatment",
      "description": "Control the robot ARM using Bluetooth connection between phone and Raspberry Pi."
    }
  ],
  "languages_known": ["English", "Tamil"],
  "hobbies": [
    "Make up",
    "Photography",
    "Participating in social activities",
    "Singing",
    "Drawing",
    "Painting",
    "Driving",
    "Editing",
    "Photoshop"
  ]
};

// Iterating over education details
console.log("Education:");
for (let edu of resume.education) {
  console.log(`${edu.degree} - ${edu.institution}`);
  console.log(`Year of Passing: ${edu.year_of_passing}, Percentage: ${edu.percentage}%`);
}

// Iterating over companies worked
console.log("\nWork Experience:");
for (let company of resume.companies) {
  console.log(`${company.name}`);
  console.log(`From ${company.from} to ${company.to}`);
}

// Iterating over skills
console.log("\nSkills:");
for (let skill of resume.skills) {
  console.log(skill);
}

// Iterating over project details
console.log("\nProject Details:");
for (let project of resume.project_details) {
  console.log(`${project.title}`);
  console.log(`Description: ${project.description}`);
}

// Iterating over hobbies
console.log("\nHobbies:");
for (let hobby of resume.hobbies) {
  console.log(hobby);
}

// Iterating over areas of interest
console.log("\nAreas of Interest:");
for (let interest of resume.area_of_interest) {
  console.log(interest);
}
