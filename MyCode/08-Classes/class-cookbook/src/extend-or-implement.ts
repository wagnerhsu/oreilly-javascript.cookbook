class Media {
  format: string;
  constructor(format: string) {
    console.log('Media.ctor');
    this.format = format;
  }
}
class Video extends Media {}
class Image implements Media {
  format: string;
  constructor(format: string) {
    this.format = format;
  }
}

const image = new Image('image');
const video = new Video('video');
const medias = [image, video];
medias.forEach((x) => console.log(x));
export {};
