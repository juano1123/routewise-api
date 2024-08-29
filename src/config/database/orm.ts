import { DataSourceOptions } from 'typeorm';

//eslint-disable-next-line  @typescript-eslint/no-require-imports
require('dotenv').config();

const options: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'reservations_user',
  password: 'reservations_password',
  database: 'reservations_db',
  entities: [__dirname + '/../../entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
};

export default options;
