import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dept: string;
  
  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  contactNo: string;

  @Column()
  email: string;

}
