export class ListaItem{
  wish: string;
  complete: boolean;

  constructor ( wish: string ) {
    this.wish = wish;
    this.complete = false;
  }
}