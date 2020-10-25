import React from "react";
import { Query } from "react-apollo";

import Restaurants from "./Restaurants";
import GET_RESTAURANTS from "./queries";

function ListPage(props) {
  return (
    <div>
      <h1>List of restaurants</h1>
      <Query query={GET_RESTAURANTS} variables={{ limit: 20, start: 0 }}>
        {({ data, error, loading }) => {
          if (error) {
            return <div>An error occured</div>;
          }

          if (loading) {
            return <div>Loading...</div>;
          }

          return <Restaurants {...data} />;
        }}
      </Query>
    </div>
  );
}

export default ListPage;
