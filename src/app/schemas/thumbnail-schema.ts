export class ThumbnailSchema {
  constructor(
    public id: string,
    public slug: string,
    public order: number,
    public name: string,
    public date: string,
    public img: string,
    public description: string
  ) {}
}
