const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/your-api-endpoint', (req, res) => {
    const formData = req.body;

    console.log('Received form data:', formData);

    res.status(200).send('Form submitted successfully!');
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});