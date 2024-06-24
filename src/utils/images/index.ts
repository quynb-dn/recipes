export const generateRandomImageUrl = (
  width: number,
  height: number,
  category: string
) => {
  return `https://loremflickr.com/${width}/${height}/${category}`;
};
