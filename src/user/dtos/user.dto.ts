import { UserRoleEnum } from './user-role.enum';

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email: string;
  password?: string;
  role?: UserRoleEnum;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
