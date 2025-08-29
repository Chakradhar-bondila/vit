const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Helper function to categorize data
function categorizeData(data) {
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    const allAlphabets = [];

    data.forEach(item => {
        // Check if it's a number
        if (!isNaN(item) && !isNaN(parseFloat(item))) {
            const num = parseInt(item);
            sum += num;
            if (num % 2 === 0) {
                evenNumbers.push(item.toString());
            } else {
                oddNumbers.push(item.toString());
            }
        }
        // Check if it contains only alphabetic characters
        else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            // Store individual characters for concatenation
            for (let char of item) {
                allAlphabets.push(char);
            }
        }
        // Special characters
        else {
            specialCharacters.push(item);
        }
    });

    // Create concatenated string with alternating caps in reverse order
    const reversedAlphabets = allAlphabets.reverse();
    let concatString = '';
    reversedAlphabets.forEach((char, index) => {
        if (index % 2 === 0) {
            concatString += char.toUpperCase();
        } else {
            concatString += char.toLowerCase();
        }
    });

    return {
        oddNumbers,
        evenNumbers,
        alphabets,
        specialCharacters,
        sum: sum.toString(),
        concatString
    };
}

// GET route for basic health check
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// POST route - main logic
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input. 'data' should be an array."
            });
        }

        // Process the data
        const result = categorizeData(data);

        // Response object - UPDATE WITH YOUR ACTUAL DETAILS
        const response = {
            is_success: true,
            user_id: "chakradhar_22bce20352", // Replace with your_name_ddmmyyyy format
            email: "chakradharbondila@vit.ac.in", // Replace with your actual email
            roll_number: "22BCE20352", // Replace with your actual roll number
            odd_numbers: result.oddNumbers,
            even_numbers: result.evenNumbers,
            alphabets: result.alphabets,
            special_characters: result.specialCharacters,
            sum: result.sum,
            concat_string: result.concatString
        };

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: "Internal server error",
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
