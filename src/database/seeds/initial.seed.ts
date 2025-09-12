import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { hash } from '../../utils/security';

const adminUserDto: CreateUserDto = {
  firstName: 'Admin',
  lastName: 'Admin',
  email: 'admin@admin.com',
  password: '123',
};

export default class InitialSeed implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<void> {
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const userRepository = connection.getRepository(User);
      const user = userRepository.create({
        ...adminUserDto,
        password: await hash(adminUserDto.password),
      });
      await queryRunner.manager.save(User, user);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
