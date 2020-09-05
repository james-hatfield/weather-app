import { IForcast, AggForcast } from '../app.types';

/**
 * Takes the relavent api data and transforms it into a more useable version
 *
 * @param forcast - Shape of the relavent api data
 */
export function deserializeForcast(forcast: IForcast): AggForcast[] {
  return forcast.list.map((d) => ({
    date: d.dt_txt,
    temp_avg: d.main.temp,
    temp_min: d.main.temp_min,
    temp_max: d.main.temp_max,
    temp_mean: 0,
  }));
}

/**
 * The api sends back data for every 3 hours in a day. This funciton aggregates
 * all of the periods of the day and averages out the temp and min/max temps.
 *
 * @param forcast - Array
 */
export function aggregateForcast(forcast: AggForcast[]): AggForcast[] {
  const aggForcast = [];
  const days = forcast.length / 8;
  for (let i = 0; i < days; i++) {
    // There are eight forcasts per day, group them together
    const tmpArr = [...forcast.splice(0, 8)];

    const newDay: AggForcast = {
      date: tmpArr[0].date.split(' ')[0],
      temp_avg: 0,
      temp_max: 0,
      temp_min: 0,
      temp_mean: 0,
    };

    // For each period add them up and divide by total number of periods
    tmpArr.forEach((period) => {
      newDay.temp_avg += Math.round(period.temp_avg / 8);
      if (newDay.temp_max < period.temp_max) {
        newDay.temp_max = Math.round(period.temp_max);
      }
      if (newDay.temp_min > period.temp_min || newDay.temp_min === 0) {
        newDay.temp_min = Math.round(period.temp_min);
      }
    });

    newDay.temp_mean = Math.round(
      (newDay.temp_avg + newDay.temp_max + newDay.temp_min) / 3
    );
    aggForcast.push(newDay);
  }
  return aggForcast;
}
