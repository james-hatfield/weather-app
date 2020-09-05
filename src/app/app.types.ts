interface IForcastData {
  dt_txt: string;
  main: { temp: number; temp_min: number; temp_max: number };
}

export interface IForcast {
  list: IForcastData[];
}

export interface AggForcast {
  date: string;
  temp_avg: number;
  temp_min: number;
  temp_max: number;
  temp_mean: number;
}

// Mock data used for forcast.util tests
export const mockAPIResults: IForcast = {
  list: [
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
    {
      dt_txt: '2020-09-05 18:00:00',
      main: {
        temp: 81.79,
        temp_max: 92.05,
        temp_min: 81.79,
      },
    },
  ],
};
