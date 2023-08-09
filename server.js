const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
    const urlList = req.query.url;

    if (!urlList || !Array.isArray(urlList)) {
        res.status(400).json({ error: 'Invalid URL list' });
        return;
    }

    const requests = urlList.map(async (url) => {
        try {
            const response = await axios.get(url, { timeout: 500 });
            return response.data.numbers || [];
        } catch (error) {
            return [];
        }
    });

    const results = await Promise.all(requests);

    const mergedNumbers = results.reduce((merged, numbers) => {
        numbers.forEach((num) => {
            if (!merged.includes(num)) {
                merged.push(num);
            }
        });
        return merged;
    }, []);

    mergedNumbers.sort((a, b) => a - b);

    res.json({ numbers: mergedNumbers });
});

app.listen(port, () => {
    console.log(`${port}`);
});
