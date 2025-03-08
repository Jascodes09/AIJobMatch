# AIJobMatch

# AI Job Recommender 🚀

AI-powered job recommender that helps users find jobs based on their **skills** and **interests** using the **Adzuna Job API**. The project features a **3D animated background using Three.js** and a **TF-IDF-based ranking system** to provide the most relevant job recommendations.

## 🔥 Features
- **Skill & Interest-Based Job Search**: Users enter skills and interests to find relevant jobs.
- **AI-Powered Ranking**: Uses a **TF-IDF-like** scoring system to rank jobs based on relevance.
- **3D Animated Background**: Implemented using **Three.js** for a futuristic feel.
- **Glassmorphic UI Design**: Aesthetic and modern user interface.
- **Live Job Data**: Fetches job listings from **Adzuna API** in real time.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **3D Graphics:** Three.js
- **API Integration:** Adzuna Job API

## 🚀 Getting Started
### 1️⃣ Prerequisites
- A modern web browser (Google Chrome, Firefox, Edge, etc.).
- Internet connection to fetch job listings.
- An **Adzuna API Key** (Sign up at [Adzuna](https://www.adzuna.com/) for free API access).

### 2️⃣ Setup Instructions
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/ai-job-recommender.git
   cd ai-job-recommender
   ```
2. Open `index.html` in a browser.
3. Replace the `appId` and `appKey` in `script.js` with your **Adzuna API credentials**:
   ```js
   const appId = "YOUR_ADZUNA_APP_ID";
   const appKey = "YOUR_ADZUNA_APP_KEY";
   ```
4. Start searching for jobs! 🚀

## 📂 Project Structure
```
📁 ai-job-recommender
│── index.html         # Main HTML file
│── style.css          # Stylesheet (Glassmorphic UI)
│── script.js          # Job search & ranking logic
│── threejs-bg.js      # Three.js 3D background animation
│── README.md          # Project Documentation (this file)
```

## 🎨 UI Preview
![Project Screenshot]("C:\Users\shaik\OneDrive\Pictures\Screenshots 1\Jobrec.png"/800x400?text=Project+Preview)

## 🎯 Future Enhancements
- 🔹 AI-based job recommendations using **Machine Learning**.
- 🔹 Add **location-based** filtering for better job relevance.
- 🔹 Implement **job bookmarking** and a **dashboard** for users.

## 🤝 Contributing
Want to improve this project? Follow these steps:
1. **Fork** the repository.
2. **Clone** your forked repo:
   ```sh
   git clone https://github.com/your-username/ai-job-recommender.git
   ```
3. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
4. **Make your changes** and commit:
   ```sh
   git commit -m "Add new feature"
   ```
5. **Push your changes** and submit a **Pull Request**!

## 📜 License
This project is licensed under the **MIT License**. Feel free to use and modify it.

---
🚀 *Happy Coding!* 🎯
