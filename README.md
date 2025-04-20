# Infinity E-commerce Website

A full-featured e-commerce website built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup, Login, Google OAuth)
- Product Management
- Shopping Cart
- Payment Integration (Razorpay)
- Order Management
- Email Notifications

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js, JWT
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Template Engine**: Handlebars (hbs)
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js (>=14.0.0)
- MongoDB
- Razorpay Account
- Gmail Account (for email service)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/infinity.git
cd infinity
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_uri
PORT=4000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SESSION_SECRET=your_session_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
infinity/
├── src/
│   ├── Routes/         # Route handlers
│   ├── Models/         # Database models
│   ├── Controllers/    # Business logic
│   └── index.js        # Application entry point
├── templates/          # View templates
├── infinity/           # Static files
└── public/            # Public assets
```

## Deployment

The application can be deployed on various platforms:
- Render
- Heroku
- DigitalOcean
- AWS

See the deployment guide in the documentation for detailed instructions.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/infinity](https://github.com/yourusername/infinity) 