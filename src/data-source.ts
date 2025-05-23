import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres-master.int.selless.dev',
  port: 5432,
  username: 'scm',
  password: '123456',
  database: 'scm',
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts']
});
