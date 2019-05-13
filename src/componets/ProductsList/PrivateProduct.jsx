import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute =({ component: ProductPage, ...rest }) => {
//     console.log('isLogin: ', rest.isLogin)
//     return <Route {...rest} render={(props) => (
//         rest.isLogin === true
//           ? <ProductPage  {...props} />
//             // ? <div>test</div>
//             : <Redirect to='/sign-in' />
//       )} />
// }

export default PrivateRoute;