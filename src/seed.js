// In your server.js or a separate seed.js file

const User = require('./models/user');
const Product = require('./models/Product');

// ... (MongoDB connection code as before)

async function seedData() {
    try {
        // Create sample users (replace with your desired data)
        const users = await User.insertMany([
            { username: 'user1' },
            { username: 'user2' }
        ]);

        // Create sample products
        const products = await Product.insertMany([
            { name: 'Product A', price: 20 },
            { name: 'Product B', price: 30 }
        ]);

        console.log('Sample data seeded successfully!');

    } catch (error) {
        console.error('Error seeding data:', error);
    }
}


// Call the seed function after connecting to the database
mongoose.connect('mongodb://localhost:27017/your_database_name', { // Replace with your MongoDB URI
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    seedData(); // Seed the data after successful connection
}).catch(err => console.error('MongoDB connection error:', err));