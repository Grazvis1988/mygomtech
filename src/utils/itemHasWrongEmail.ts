import {IItem} from "~/services/getUserItems";
/*import * as yup from 'yup';

// This function returns a promise and Array.filter doesn't filter because of it...

const emailSchema = yup.string().email().required()
const itemHasWrongEmail = async (item: IItem) => {
  const isValid = await emailSchema.isValid(item.email)
  console.log(isValid)
  return isValid
};
*/;
const itemHasWrongEmail = (item: IItem): RegExpMatchArray => {
  return String(item.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export default itemHasWrongEmail;
