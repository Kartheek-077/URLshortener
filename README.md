# 🔗 URL Shortener with QR Code Generator

A full-stack URL Shortener web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. The application generates a unique short URL for any valid URL, creates a QR code for the shortened link, tracks the number of visits, and stores all data in MongoDB.

---

## 🚀 Features

- 🔗 Generate a unique short URL
- 📱 Automatically generate a QR Code for every shortened URL
- 💾 Store URLs and QR Codes in MongoDB
- ♻️ Prevent duplicate URLs by reusing existing short URLs
- 📜 Store complete visit history with timestamps
- 🎨 Responsive and modern UI using HTML & CSS
- ⚡ Fast URL redirection
---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Packages Used
- express
- mongoose
- shortid
- qrcode
- ejs

---

## 📂 Project Structure

```
URL-Shortener/
│
├── Controller/
│   ├── Homeroute.js
│   └── userroute.js
│
├── Model/
│   └── url.js
│
├── Routes/
│   ├── homerouter.js
│   └── userrouter.js
│
├── views/
│   └── index.ejs
│
├── public/
│   ├── style.css
│   └── back.jpg
│
├── connection.js
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/URLshortener.git
```

### Navigate into the project

```bash
cd URLshortener
```

### Install dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running on

```
mongodb://127.0.0.1:27017/shortURL
```

### Start the server

```bash
npm start
```

or

```bash
nodemon index.js
```

---

## 🌐 Application Workflow

1. User enters a valid URL.
2. Application checks whether the URL already exists.
3. If the URL already exists:
   - Existing short URL is returned.
   - Existing QR Code is displayed.
4. Otherwise:
   - Generate a unique Short ID.
   - Create a Short URL.
   - Generate a QR Code.
   - Store URL, Short URL, QR Code, and Visit History in MongoDB.
5. Whenever the short URL is opened:
   - Redirect to the original URL.
   - Store the visit timestamp.

---

## 📊 MongoDB Schema

```javascript
{
    shortId: String,
    redirectUrl: String,
    qrCode: String,
    visitHistory: [
        {
            timestamp: Number
        }
    ]
}
```

---

## 🔮 Future Improvements

- User Authentication
- Custom Short URLs
- URL Expiration
- Download QR Code
- Copy Short URL Button
- Analytics Dashboard
- Search Previous URLs
- Dark Mode
- REST API Documentation

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
