// images.ts
const images: { [key: string]: any } = {};

for (let i = 1; i <= 25; i++) {
  images[`Foto${i}`] = require(`./Foto_${i}.jpg`);
}

export { images };
