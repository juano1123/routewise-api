import { hash as bcryptHash } from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const hash = async (data: string) =>
    bcryptHash(data, 10);