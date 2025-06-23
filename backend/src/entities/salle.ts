import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn,  } from "typeorm";
import { Lieu } from "./Lieu";
import { Table_evenement } from "./Table";

@Entity('salle')
export class Salle{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    nom:string;

    @ManyToOne(()=>Lieu,lieu=>lieu.salles,{onDelete:'CASCADE'})
   lieu:Lieu;

   @ManyToMany(()=>Table_evenement,table_even=>table_even.salle)
   tables_even:Table_evenement;
}