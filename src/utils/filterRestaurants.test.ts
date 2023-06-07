import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('text = “”, category=”전체”', () => {
    it('전체 레스토랑 객체를 포함한 배열을 반환한다', () => {
      const text = '';
      const category = '전체';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(restaurants.length);
    });
  });

  context('text = “”, category=”중식” ', () => {
    it('중식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const text = '';
      const category = '중식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('text = “”, category=”한식” ', () => {
    it('한식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const text = '';
      const category = '한식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('text = “”, category=”일식" ', () => {
    it('일식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const text = '';
      const category = '일식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('text = “메”, category="" ', () => {
    it('‘메’를 포함한 레스토랑 객체를 배열을 반환한다. ', () => {
      const text = '메';
      const category = '전체';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(2);
      expect(filteredRestaurants[0].name).toBe('메가반점');
    });
  });

  context('text = “메”, category="일식" ', () => {
    it('‘메’를 포함한 일식 카테고리의 레스토랑 객체를  배열을 반환한다.', () => {
      const text = '메';
      const category = '일식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        text,
        category,
      });

      expect(filteredRestaurants).toHaveLength(0);
    });
  });
});
