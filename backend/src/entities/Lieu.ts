import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evenement } from "./Evenement";
import { Salle } from "./salle";

@Entity('lieu')
export class Lieu{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nom:string;
    @ManyToOne(()=>Evenement,evenement=>evenement.lieux,{onDelete:'CASCADE'})
    evenement:Evenement;
    @OneToMany(()=>Salle,salle=>salle.lieu)
    salles:Salle[];
}