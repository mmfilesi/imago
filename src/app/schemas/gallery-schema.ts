export class GallerySchema {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public list: Array<any>
  ) {}
}
