# 📝 Blog App — React + Django REST Framework

A full-stack blog application where users can create, view, and delete blog posts. The frontend is built with **React** (Vite + Tailwind CSS) and communicates with a **Django REST Framework** backend via REST APIs.

---

## ✨ Features

- ➕ **Create** new blog posts with name, title, and details
- 📋 **View** all blog posts in a responsive card layout
- 🗑️ **Delete** individual blog posts
- 🔄 Client-side routing between the submission form and blog listing page
- 🎨 Clean, dark-themed UI styled with Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS

**Backend**
- Django
- Django REST Framework
- SQLite (default, can be swapped for PostgreSQL/MySQL)

---

## 📂 Project Structure

```
blog-app/
├── frontend/              # React application
│   ├── src/
│   │   ├── Components/
│   │   │   └── GetBlog.jsx
│   │   ├── App.jsx
│   │   └── ...
│   └── package.json
│
└── backend/                # Django REST Framework API
    ├── manage.py
    └── ...
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)
- npm or yarn

### Backend Setup (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend will run on `http://127.0.0.1:8000`.

### Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| `POST` | `/api/addblog/` | Add a new blog post |
| `GET` | `/api/Homepage/` | Fetch all blog posts |
| `DELETE` | `/api/delete/<id>/` | Delete a blog post by ID |

---

## 📸 Screenshots

> Add screenshots of the form page and blog listing page here.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or an issue.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
