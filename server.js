const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let user = [
    { username: "alice", age: 25, email: "alice@example.com"},
    { username: "bob", age: 30, email: "bob@example.com"},
    { username: "charlie", age: 28, email: "charlie@example.com"},
]

app.get('/', (req, res) => {
    res.send('Server is running ');
  })

app.post('/login', (req,res) => {
    const {username, age, email} = req.body;

    if(!username) {
        return res.status(400).json({ error: "username cannot be empty"});
    }
    if(!age) {
        return res.status(400).json({ error: "age cannot be empty"});
    }
    if(!email) {
        return res.status(400).json({ error: "email cannot be empty"});
    }

    const ValidUsername = "abcd";
    const VaildAge = "000";
    const ValidEmail = "user@example.com";

    if(username === ValidUsername && age === VaildAge && email === ValidEmail) {
        return res.status(200).json({message: "User Found", data: {userDetails}});
    }else {
        return res.status(401).json({message: "User not Found"});
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
  