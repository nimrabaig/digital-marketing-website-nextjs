import { gql } from "@apollo/client";


export const CONTACT_US = gql`
  mutation ContactUs(
    $name: String!
    $email: String!
    $countryCode: String
    $phone: String
    $website: String
    $company: String
    $services: [String]
    $budget: String!
    $ipAddress: String
    $message: String
    $isSubscribed: Boolean
  ) {
    ContactUs(
      name: $name
      email: $email
      countryCode: $countryCode
      phone: $phone
      website: $website
      company: $company
      services: $services
      budget: $budget
      ipAddress: $ipAddress
      message: $message
      isSubscribed: $isSubscribed
    )
  }
`;



export const SUBSCRIBE_NEWS_LETTER = gql`
    mutation SubscribeNewsLetter(
        $name: String!
        $email: String!
     ) {
        SubscribeNewsLetter(
            name: $name
            email: $email
    )
     }
 `;