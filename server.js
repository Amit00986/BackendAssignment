
const express = require('express');
const connectDB = require('./src/apis/db');
const userRoutes = require('./src/apis/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


connectDB();

app.use('/api', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
