import { Selector } from 'interfaces';

export const getImages: Selector<string[]> = ({ breed: { images } }) => images;
