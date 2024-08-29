import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  firstName: string;

  @Column({ type: 'varchar', length: 300 })
  lastName: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  phoneNumber?: string;

  @Column({ type: 'varchar', length: 300, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 300, select: false })
  password?: string;
}
