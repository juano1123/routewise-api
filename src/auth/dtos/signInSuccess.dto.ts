import { UserRoleEnum } from 'src/user/dtos/user-role.enum';
import { UserDto } from 'src/user/dtos/user.dto';

export class SignInSuccessDto {
  user: UserDto;
  accessToken: string;
}
