export function preLoadImages(...images) {
    return images.reduce((acc, img) => {
      let newImage = new Image();
      newImage.src = img;
      acc.push(newImage);
      return acc;
    }, []);
  }