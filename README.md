Assignment 1: Web-Based Java Application
This repository contains the implementation for Assignment 1, featuring a robust Java backend integrated with a dynamic, responsive frontend.

🌐 Project Overview
This project is built as a unified web application. It handles business logic and data processing on the server side (Java) while providing an interactive user interface built with standard web technologies.

🛠️ Tech Stack
Frontend
HTML5: Structural layout and accessibility.

CSS3: Custom styling and responsive design.

JavaScript (ES6+): Client-side logic, DOM manipulation, and API interaction.

Backend
Language: Java 17+

Framework: [e.g., Spring Boot / Jakarta EE]

Build Tool: [Maven / Gradle]

🚀 Getting Started
Prerequisites
Java Development Kit (JDK): Version 17 or higher.

Build Tool: Maven (if using pom.xml) or Gradle.

Web Browser: Chrome, Firefox, or Edge.

Installation & Setup
Clone the repository:

Bash
git clone https://github.com/Paras-Gupta16/MicroService_Assignment-1.git
cd MicroService_Assignment-1
Build and Run the Backend:

Using Maven:

Bash
mvn clean install
mvn spring-boot:run
Using Standard Java:

Bash
javac -d bin src/**/*.java
java -cp bin com.package.Main
Accessing the Frontend:

Once the server is running, open your browser and navigate to:

http://localhost:8080 (or your configured port).

Alternatively, if the frontend is static, open index.html directly from the src/main/resources/static (or equivalent) folder.

📂 Project Structure
Plaintext
MicroService_Assignment-1/
├── src/
│   ├── main/
│   │   ├── java/           # Java Backend Logic
│   │   └── resources/
│   │       ├── static/     # Frontend Assets
│   │       │   ├── css/    # Stylesheets
│   │       │   ├── js/     # Scripts
│   │       │   └── index.html
│   │       └── templates/  # Server-side templates (if applicable)
├── pom.xml                 # Dependency Management
└── README.md
✨ Key Features
Interactive UI: Clean user interface styled with CSS3.

Dynamic Logic: JavaScript-driven data handling for a smooth user experience.

Robust Backend: Java-based processing to handle core assignment requirements.
