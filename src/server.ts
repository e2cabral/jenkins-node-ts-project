import 'reflect-metadata';
import app from './main/config/app.config';
import DbClient from './infra/database/db-client';

DbClient.connect().then(
    () => {
        app.listen(3000, (err: Error, address: string) => {
            if (err) {
                app.log.error(err.message);
                process.exit(1);
            }
            app.log.info(`Server is running on ${address}`);
        });
    },
    (err) => {
        app.log.error(err.message);
    }
)
