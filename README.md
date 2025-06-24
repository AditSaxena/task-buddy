
# 📌 Task Buddy

A minimalist yet stylish **to-do list app** built using **React**. Add, check off, and delete tasks with a single click. Tasks persist between sessions using `localStorage`. Includes a custom UI with image-based toggle indicators.

## 🔗 Live Demo

👉 [Task Buddy — Live on Vercel](https://task-buddy-ebon.vercel.app/)



## 🚀 Features

- ✅ Add new tasks
- ✏️ Strike-through completed tasks
- 🖼 Custom icons for checked/unchecked states (via CSS `::before`)
- ❌ Delete tasks with a single click
- 💾 Tasks persist using browser `localStorage`
- 📱 Responsive & clean design with custom CSS

## 🛠️ Tech Stack

| Frontend | Styling   | Persistence    |
|----------|-----------|----------------|
| React.js | Custom CSS | Browser `localStorage` |

## 🧩 Folder Structure

```
src/
├── Components/
│   ├── TBContainer.jsx
│   ├── InputBox.jsx
│   └── ListItem.jsx
├── assets/
│   ├── icon.png
│   ├── checked.png
│   └── unchecked.png
├── index.css
└── main.jsx
```

## 🧪 How to Run Locally

```bash
git clone https://github.com/yourusername/task-buddy.git
cd task-buddy
npm install
npm run dev
```

## 📦 Deployment

Deployed using [Vercel](https://vercel.com/):  
🔗 https://task-buddy-ebon.vercel.app/


## 🙋‍♂️ Author

Made with ❤️ by [Adit Saxena](https://github.com/AditSaxena)
