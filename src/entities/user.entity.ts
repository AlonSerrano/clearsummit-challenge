import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { IsEmail, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  first_name!: string;

  @Column()
  @IsNotEmpty()
  last_name!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @IsDateString()
  date_of_birth!: string;

  @Column()
  @IsBoolean()
  accept_terms_of_service!: boolean;
}
