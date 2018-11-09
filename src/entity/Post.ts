import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    text: string;

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[];

    @Column({
        type: "varchar",
        nullable: true,
        array: true,
        // `lenght` on an array makes `TypeORM` generate a new migration every time.
        length: 25,
    })
    myLittleBrokenArray?: string[];

}
