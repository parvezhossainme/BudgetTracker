const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON bodies

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'budgettrackerdb',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Test route
app.get('/', (req, res) => {
    return res.json("From backend side");
});

// Fetch all customers (for testing purposes)
app.get('/customers', (req, res) => {
    db.query('SELECT * FROM customers', (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const query = 'SELECT * FROM customers WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ success: false, message: 'Database query error' });
        }

        if (results.length > 0) {
            const user = results[0];
            console.log(res[0]);
            return res.json({
                success: true,
                customerID: user.customer_id,
                username: user.username,
                email: user.email,
                address: user.address,
                customerName : user.customer_name
            });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    });
});


// Seller login route
app.post('/seller-login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const query = 'SELECT * FROM sellers WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error during seller login:', err);
            return res.status(500).json({ success: false, message: 'Database query error' });
        }

        if (results.length > 0) {
            const seller = results[0];
            return res.json({
                success: true,
                sellerID: seller.seller_id,
                shopID: seller.shop_id,
                sellerName: seller.seller_name,
                email: seller.email,
            });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 8081;

// app.use(cors()); // Enable CORS for all requests
// app.use(bodyParser.json()); // Parse JSON bodies

// // MySQL connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'budgettrackerdb',
// });

// db.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// // Test route
// app.get('/', (req, res) => {
//     return res.json("From backend side");
// });

// // Fetch all users (for testing purposes)
// app.get('/users', (req, res) => {
//     db.query('SELECT * FROM Users', (err, results) => {
//         if (err) {
//             console.error('Error fetching users:', err);
//             return res.status(500).json({ error: 'Database query error' });
//         }
//         res.json(results);
//     });
// });

// // Login route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // if (!email || !password) {
//     //     return res.status(400).json({ success: false, message: 'Email and password are required' });
//     // }

//     const query = 'SELECT * FROM Users WHERE Email = ? AND PasswordHash = ?';
//     db.query(query, [email, password], (err, results) => {
//         if (err) {
//             console.error('Error during login:', err);
//             return res.status(500).json({ success: false, message: 'Database query error' });
//         }

//         if (results.length > 0) {
//             const user = results[0];
//             return res.json({ success: true, role: user.Role , userID : user.UserID , username : user.Username , email: user.Email, password: user.PasswordHash });
//         } else {
//             return res.status(401).json({ success: false, message: 'Invalid email or password' });
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
