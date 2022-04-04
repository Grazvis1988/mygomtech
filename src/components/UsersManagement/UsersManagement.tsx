import {FC} from "react";
import List from "./components/List/List";
import ErrorBlock from "../ErrorBlock";
import Filter from "./components/Filter/Filter";
import LoadingScreen from "../LoadingScreen";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import {Routes} from "~/constants";
import itemHasWrongEmail from "~/utils/itemHasWrongEmail";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemIsOlderThan30Days from "~/utils/itemIsOlderThan30Days";
import { useUserContext } from "../UserContext";
import { useItemsContext } from "../ItemsContext";
import logout from "../../services/logout";

const UsersManagement: FC = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    errorMessage,
    isLoading,
  } = useItemsContext();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen/>;
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>;
  }
  

  return (
    <div className="container">
      <Header username={username} onLogout={logout}/>
      <Filter items={items}/>
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={items}/>
        </Route>
        <Route path={Routes.Wrong}>
          <List items={items.filter((item) => !itemHasWrongEmail(item))}/>
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => itemHasReusedPassword(item, items))}/>
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter((item) => itemIsOlderThan30Days(item))}/>
        </Route>
      </Switch>
    </div>
  );
};

export default UsersManagement;
