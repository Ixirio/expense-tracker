import express from 'express';

const app = express();


app.listen(3000, () => {
    console.log('server running on port 3000');
});

app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" });
});
