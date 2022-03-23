import {FC, useEffect } from 'react';
import {Route, RouteProps, useHistory} from 'react-router-dom';
import {Routes} from '~/constants';

const PublicRoute: FC<RouteProps> = ({
 path,
 component,
}) => {
  const {push} = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      push(Routes.Users);
    }
  }, []);

  return <Route path={path} component={component}/>
};

export default PublicRoute;
