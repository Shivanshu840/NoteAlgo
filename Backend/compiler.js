const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const JDoodle_API_URL = 'https://api.jdoodle.com/v1/execute';

app.post('/compile', async (req, res) => {
    const { code, language, input } = req.body;

    console.log('Code:', code);
    console.log('Language:', language);
    console.log('Input:', input);

    const langMapping = {
        python3: 'python3',
        javascript: 'nodejs',
        java: 'java',
        c_cpp: 'cpp14'
    };

    const program = {
        script: code,
        language: langMapping[language],
        stdin: input, // Ensure input is passed correctly
        versionIndex: '0',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET
    };

    try {
        const response = await fetch(JDoodle_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(program)
        });

        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while compiling the code.');
    }
});
app.listen(3000,()=>{
    console.log(`server is running on this ${3000}`)
})
