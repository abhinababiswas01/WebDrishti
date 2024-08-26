#WEBDRISTI - Anti Manipulation Web Extension Documentation
Overview
The Web Drishti - Anti Manipulation Web Extention is a web extension designed to identify and flag dark patterns on online stores across the web. By leveraging artificial intelligence and machine learning, the extension helps users recognize manipulative design techniques that may deceive or exploit them. This documentation outlines the functionality, architecture, and usage of the Anti Manipulation Brigade web extension.

Tech Stack
The Anti Manipulation Brigade uses a straightforward and effective combination of technologies to achieve its goal of detecting dark patterns on web pages. Here's a breakdown of the tech stack in simple terms:

Front-End
JavaScript: The front-end part of the extension, which scrapes and analyzes the content of the active web page, is built using JavaScript. This code runs in your browser and collects the necessary data to check for dark patterns.
Back-End
Python and Flask: The back-end server is written in Python and uses Flask, a lightweight web framework. The server processes the data sent from the front-end and uses machine learning models to detect dark patterns.
Machine Learning
Bernoulli Naive Bayes Models: These models help classify pieces of text to determine if they contain dark patterns.
Training Data: The algorithms are trained using datasets from Princeton University researchers and additional datasets that have been manually annotated to ensure accuracy.
By combining these technologies, the Anti Manipulation Brigade efficiently detects and alerts users to manipulative design practices, making the web a safer place to browse.

Features
Detection of Dark Patterns: Automatically detects various types of dark patterns on e-commerce websites.
Real-Time Alerts: Notifies users when a dark pattern is detected.
Detailed Reports: Provides detailed information about the detected dark patterns.
User-Friendly Interface: Easy-to-use interface for seamless user experience.
Machine Learning: Continuously improves detection accuracy through machine learning models.
Installation
Step 1: Clone the Repository
First, clone this repository or download and unzip it.

git clone https://github.com/Akash-nath29/webdrishti.git
cd webdrishti
Step 2: Install and Run the Flask App Backend
Navigate to the api directory:

cd api
Install the required libraries:

python -m venv venv
For Mac/Linux

source venv/bin/activate
For Windows

venv\Scripts\activate
pip install -r requirements.txt
Run the Flask app:

python app.py
Step 3: Install the Chrome Extension
Open your browser and navigate to chrome://extensions.

Enable "Developer mode" by toggling the switch at the top right of the page.

Click the "Load unpacked" button.

Navigate to the repository directory and select the app folder for installation.

Ensure that the extension is enabled. If so, the extension has been successfully installed!

Usage
Activate the Extension:

Click on the Web Extention icon in your browser toolbar.
Ensure the extension is enabled.
Browse Websites:

Visit any online store and click the Analyze Site Button in the Web Extention. The extension will automatically scan for dark patterns.
If a dark pattern is detected, you will receive an alert with details about the issue.
Architecture
Backend
The backend is built using Python and Flask. It handles the machine learning model's predictions and serves the necessary data to the frontend.

Key Components
Flask Server: Manages API endpoints for the extension.
Machine Learning Model: Uses Bernoulli Naive Bayes models to detect dark patterns in the text.
Training Data: The models are trained using datasets from Princeton University researchers and manually annotated datasets.
Frontend
The frontend of the web extension is built using HTML, CSS, and JavaScript. It provides a user-friendly interface for interacting with the extension and displaying detection results.

Key Components
Popup Interface: The main interface shown when the extension icon is clicked, allowing users to see detection results and interact with the extension.
Background Script: Manages communication between the extension and the backend, ensuring data is sent to the Flask server for analysis.
Content Scripts: Injected into web pages to scrape and analyze the content, identifying potential dark patterns and sending relevant data to the backend for further processing.
