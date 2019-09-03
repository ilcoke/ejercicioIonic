import { ListaItem } from './lista-item.model';
export class Lista {
    id: number;
    titulo: string;
    create: Date;
    ended: DataCue;
    finished: boolean;
    items: ListaItem[];
    
    constructor( titulo: string ) {
        this.titulo = titulo;

        this.create = new Date();
        this.finished = false;
        this.items = [];

        this.id = new Date().getTime();

    }
}