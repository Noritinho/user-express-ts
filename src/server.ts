import 'express-async-errors';
import express from 'express';

import AppError from './utils/AppError';
import { routes } from './routes';

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, res) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    console.log(error);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

const port = 3333;
app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
});
