import {Controller} from '../Controller';

describe('Controller class test', () => {
  test('자동차 경주의 우승자가 한명인 경우 한명만 반환한다.', () => {
    const controller = new Controller();

    const cars = [
      {carName: 'pobi', distance: 1},
      {carName: 'crong', distance: 2},
      {carName: 'honux', distance: 3},
    ];

    expect(controller.getMaximumDistanceCars(cars)).toEqual([{carName: 'honux', distance: 3}]);
  });

  test('자동차 경주의 우승자가 여러명인 경우 여러명을 반환한다.', () => {
    const controller = new Controller();

    const cars = [
      {carName: 'pobi', distance: 1},
      {carName: 'crong', distance: 2},
      {carName: 'honux', distance: 4},
      {carName: 'face', distance: 4},
    ];

    expect(controller.getMaximumDistanceCars(cars)).toEqual([
      {carName: 'honux', distance: 4},
      {carName: 'face', distance: 4},
    ]);
  });
});
