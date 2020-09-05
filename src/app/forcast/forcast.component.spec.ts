import { deserializeForcast, aggregateForcast } from './forcast.utils';
import { mockAPIResults } from '../app.types';

describe('Forcast utility functions', () => {
  describe('Deserialize Forcast Function', () => {
    it('should deserialize api results into a relative format', () => {
      expect(mockAPIResults.list).toBeTruthy();
      expect(Object.keys(mockAPIResults.list[0])).toEqual(['dt_txt', 'main']);

      const results = deserializeForcast(mockAPIResults);
      expect(results).toBeTruthy();

      expect(results.length).toEqual(8);
      expect(Object.keys(results[0])).toEqual([
        'date',
        'temp_avg',
        'temp_min',
        'temp_max',
        'temp_mean',
      ]);
    });
  });

  describe('AggregateForcast function', () => {
    it('should aggregate forcast data periods into individual days', () => {
      const results = deserializeForcast(mockAPIResults);
      expect(results).toBeTruthy();
      expect(results.length).toEqual(8);

      const aggForcast = aggregateForcast(results);
      expect(aggForcast).toBeTruthy();
      expect(aggForcast.length).toEqual(1);
    });
  });
});
