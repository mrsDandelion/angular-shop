import { ListOfClothesModule } from './list-of-clothes.module';

describe('ListOfClothesModule', () => {
  let listOfClothesModule: ListOfClothesModule;

  beforeEach(() => {
    listOfClothesModule = new ListOfClothesModule();
  });

  it('should create an instance', () => {
    expect(listOfClothesModule).toBeTruthy();
  });
});
