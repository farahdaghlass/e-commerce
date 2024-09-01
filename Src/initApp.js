
import connectDb from '../DB/connection.js';

const initApp = (app, express) => {
    // Connect to MongoDB
    connectDb();


    app.use(express.json());
};

export default initApp;
