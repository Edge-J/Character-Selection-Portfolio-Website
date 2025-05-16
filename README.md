# Bleach Character Selection Portfolio Website

An anime-style portfolio website inspired by *Bleach: Rebirth of Souls*, combining immersive character selection with interactive UI design and personal resume content. This project demonstrates full-stack capabilities using HTML, CSS, and JavaScript along with animation, JSON data handling, and modular code organization.

---

## 🚀 Features

### 🔷 Character Selection Interface
- Choose between multiple anime-style characters.
- Dynamic costume selection with hover effects.
- Each costume dynamically loads a unique **map selection screen**.

### 🎭 Costume Integration
- Characters include 2–3 unique costumes, each with its own:
  - Artwork (full-body image).
  - Description.
  - Unlockable maps.

### 🗺️ Map Selection Screen
- Designed like a **carousel** with angled map cards.
- Includes background previews and map descriptions.
- Select a map to load a connected resume section (`resume.html#skills`, etc.).
- Smooth loading screen with animated transitions.

### 📜 Resume Page (Parallax Scroll)
- Fully animated **parallax scroll** resume built in `resume.html`.
- Sections include:
  - Education & Certifications
  - Skills
  - Work Experience
  - Soft Skills
  - Honors & Awards
- Intersection Observer reveals content as user scrolls.
- Custom `BleachFont` + responsive layout.

### 🎨 Visual Style
- Inspired by Bleach anime UI:
  - Black & red color palette
  - Glowing borders
  - Hover transitions
- Custom animations with GSAP and CSS transitions.
- Fully responsive on mobile and desktop.

### 📁 Data Management
- Character data from `bleach_characters.json`.
- Map and costume relationships from `bleach_map.json`.
- Dynamic rendering handled via `script.js`.

### 🔐 Special Elements
- Random character slot with silhouette icon.
- Locked character slots with padlock image.
- Designed for possible expansion: more characters, costumes, maps.

---

## 💻 Technologies Used
- HTML5, CSS3, JavaScript ES6
- GSAP for animations
- JSON for data management
- Google Fonts + custom font loading
- GitHub for version control and demo hosting

---

## 📦 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Edge-J/Character-Selection-Portfolio-Website.git
