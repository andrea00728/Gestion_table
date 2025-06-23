import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lieu } from "./Lieu";

@Entity('evenement')
export class Evenement {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @Column()
    theme:String;
    @Column()
    type:string;
    @Column({type:'date'})
    date:Date;
    @OneToMany(()=>Lieu,lieu=>lieu.evenement)
    lieux:Lieu[];
}