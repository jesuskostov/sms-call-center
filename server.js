const express = require("express");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

// Path to your MP3 file
const mp3Path = path.join(__dirname, "audio", "reminder.mp3");

// Route to play the MP3
app.get("/play", (req, res) => {
    exec(`mpg123 "${mp3Path}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error playing audio: ${error.message}`);
            return res.status(500).send("Failed to play audio.");
        }
        res.send("Audio played successfully.");
    });
});

app.listen(PORT, () => {
    console.log(`MP3 API server is running on http://localhost:${PORT}`);
});
