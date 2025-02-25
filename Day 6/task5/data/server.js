const fs = require('fs');
const filePath = 'users.json';

// Read data from JSON file
const readData = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Write data to JSON file
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Create (Add new user)
const addUser = (user) => {
    const users = readData();
    users.push(user);
    writeData(users);
    console.log('User added successfully');
};

// Read (Get all users)
const getUsers = () => {
    return readData();
};

// Update user by ID
const updateUser = (id, updatedData) => {
    let users = readData();
    users = users.map(user => user.id === id ? { ...user, ...updatedData } : user);
    writeData(users);
    console.log('User updated successfully');
};

// Delete user by ID
const deleteUser = (id) => {
    let users = readData();
    users = users.filter(user => user.id !== id);
    writeData(users);
    console.log('User deleted successfully');
};

// Example Usage
addUser({ id: 1, name: ' Doe', email: 'john@example.com' });
addUser({ id: 2, name: ' visa', email: 'visa@example.com' });
addUser({ id: 3, name: ' laddu', email: 'laddu@example.com' });
addUser({ id: 4, name: ' naina', email: 'naina@example.com' });
console.log(getUsers());
