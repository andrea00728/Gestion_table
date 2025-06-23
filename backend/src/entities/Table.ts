import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Salle } from "./salle";

@Entity('table')
export class Table_evenement{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    nom:string;
    @Column()
    nombre_place:number;
    @Column({default:0})
    place_reserve:number;

    @ManyToOne(()=>Salle,salle=>salle.tables_even,{onDelete:'CASCADE'})
    salle:Salle;
}