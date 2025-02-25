const express = require("express");
const app = express();

app.use(express.json());

// Custom Error Class for Consistent Error Handling
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Sample Route - Successful Response
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API!",
  });
});

// Route to Simulate an Error
app.get("/error", (req, res, next) => {
  next(new AppError("Something went wrong!", 500));
});

// Invalid JSON Body Parser Error Handling
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Invalid JSON payload.",
    });
  }
  next(err);
});

// 404 Not Found Middleware
app.use((req, res, next) => {
  next(new AppError("The requested resource could not be found.", 404));
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err); // Log error (Consider using a logging library like Winston)

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Show stack trace in development mode
  });
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
