import { config } from 'dotenv';
import path from 'path';

export default config({
  path: path.resolve(process.cwd(), '.env.' + process.env.NODE_ENV),
}).parsed;
