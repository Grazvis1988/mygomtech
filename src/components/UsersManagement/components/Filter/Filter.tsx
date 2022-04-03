import { FC } from 'react';
import { Routes } from "../../../../constants";
import { IItem } from "../../../../services/getUserItems";
import FilterTab from "./components/FilterTab"
import itemIsOlderThan30Days from "../../../../utils/itemIsOlderThan30Days";
import itemHasReusedPassword from "../../../../utils/itemHasReusedPassword";
import itemHasWrongEmail from "../../../../utils/itemHasWrongEmail";

import './filter-style.scss';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({items}) => {

  const wrongEmailsCount = items.filter(item => !itemHasWrongEmail(item)).length

  const reusedItemsCount = items
    .filter((item) => itemHasReusedPassword(item, items)).length

  const oldItemsCount = items.filter(item => itemIsOlderThan30Days(item)).length;

  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users}/>
      <FilterTab title="Wrong" count={wrongEmailsCount} path={Routes.Wrong}/>
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused}/>
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old}/>
    </div>
  );
};

export default Filter;
