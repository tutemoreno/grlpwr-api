import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });
