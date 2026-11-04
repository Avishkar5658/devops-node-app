
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DevOps Project</title>
            <style>
                body {
                    background: #101827;
                    color: white;
                    font-family: Arial;
                    text-align: center;
                    padding: 80px;
                }
                h1 { color: #38bdf8; }
                .status { color: #4ade80; }
            </style>
        </head>
        <body>
            <h1>My DevOps Assignment</h1>
            <h2 class="status">Application Running Successfully!</h2>
            <p>Node.js + Express</p>
            <p>PM2 Process Manager</p>
            <p>Nginx Reverse Proxy</p>
            <p>Jenkins CI/CD</p>
            <p>Version 1.0</p>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "DevOps Node App"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});

