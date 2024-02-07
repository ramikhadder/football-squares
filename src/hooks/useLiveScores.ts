import { useEffect, useState } from 'react';

interface Event {
  competition: any;
  date: string;
  links: any;
  name: string;
  season: {
    year: number;
    type: number;
    slug: string;
  };
  shortName: string;
  status: {};
  uid: string;
  weather: {};
  week: {};
}

interface Scoreboard {
  events: Event[];
}

export const useLiveScores = () => {
  const [data, setData] = useState<Scoreboard>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetch(
        'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard',
      );
      setData(await data.json());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return data;
};
