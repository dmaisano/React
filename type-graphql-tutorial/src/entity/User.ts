import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import {} from 'class-validator';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  averageRating(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;
}
