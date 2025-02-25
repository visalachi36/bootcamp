const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    { id: 1, name: "janu" },
    { id: 2, name: "banu" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.post('/users', (req, res) => {
    const { name } = req.body;
    
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ message: "Invalid input: 'name' is required and should be a string." });
    }
    
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.json({ message: "User added", user: newUser });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
