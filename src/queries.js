import gql from "graphql-tag";

const GET_RESTAURANTS = gql`
  query($limit: Int, $start: Int, $sort: String, $where: JSON) {
    restaurants(limit: $limit, start: $start, sort: $sort, where: $where) {
      id
      description
      district
      cover {
        url
      }
      category {
        name
      }
      name
      note
      price
      reviews {
        note
        content
      }
    }
    restaurantsConnection(where: $where) {
      aggregate {
        count
      }
    }
    categories {
      id
      name
    }
  }
`;

export default GET_RESTAURANTS;
