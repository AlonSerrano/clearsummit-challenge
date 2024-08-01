import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsBoolean, IsDate, MinDate } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty({ message: 'First name should not be empty' })
  first_name!: string;

  @Column()
  @IsNotEmpty({ message: 'Last name should not be empty' })
  last_name!: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'Email should be in a valid email format' })
  email!: string;

  @Column()
  date_of_birth!: Date;

  @Column()
  @IsBoolean({ message: 'Accept terms of service should be a boolean' })
  accept_terms_of_service!: boolean;
}
