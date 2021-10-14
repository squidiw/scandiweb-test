import { gql } from "@apollo/client";

const productFragment = gql`
   fragment ProductFragment on Product {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
         id
         name
         type
         items {
            displayValue
            value
            id
         }
      }
      prices {
         currency
         amount
      }
      brand
   }
`;

export const getProduct = gql`
   query getProduct($id: String!) {
      product(id: $id) {
         ...ProductFragment
      }
   }
   ${productFragment}
`;

export const getCategory = gql`
   query getCategory($input: CategoryInput!) {
      category(input: $input) {
         name
         products {
            ...ProductFragment
         }
      }
   }
   ${productFragment}
`;

export const getCategories = gql`
   query {
      categories {
         name
      }
   }
`;

export const getCurrencies = gql`
   query {
      currencies
   }
`;
