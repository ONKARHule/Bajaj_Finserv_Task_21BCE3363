const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data, user_id, email, roll_number } = req.body;

    // Process the data here and create a response
    let alphabets = [];
    let numbers = [];
    let highest_lowercase_alphabet = null;

    data.forEach((item) => {
        if (isNaN(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                if (!highest_lowercase_alphabet || item > highest_lowercase_alphabet) {
                    highest_lowercase_alphabet = item;
                }
            }
        } else {
            numbers.push(item);
        }
    });

    res.json({
        alphabets,
        numbers,
        highest_lowercase_alphabet,
    });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
