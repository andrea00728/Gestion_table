import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lieu } from "./Lieu";
import { User } from "./user.entity";

@Entity('evenement')
export class Evenement {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:"varchar",length:255})
    user_id:string;

    // @ManyToOne(()=>User,user.id,{nullable:false})
    // @JoinColumn({name:"i=utilisateur_id"})
    // user:User;
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
    @Column({type:'timestamp',default:()=>"CURRENT_TIMESTAMP"})
    date_creation:Date;
}