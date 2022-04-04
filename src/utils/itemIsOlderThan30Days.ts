import {IItem} from "~/services/getUserItems";

const parseISOString = (s: string): Date => {
  const a = s.split(/\D+/);
  const b = a.map(s => Number(s));
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

const itemIsOlderThan30Days = (item: IItem): boolean => {
  const currentDate = new Date();
  const difirenceInTime = currentDate.getTime() 
    - parseISOString(item.createdAt).getTime();

  return (difirenceInTime / (1000 * 3600 * 24)) > 30;
};

export default itemIsOlderThan30Days;
