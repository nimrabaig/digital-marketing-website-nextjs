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
  mutation SubscribeNewsLetter($name: String!, $email: String!) {
    SubscribeNewsLetter(name: $name, email: $email)
  }
`;

export const UNSUBSCRIBE_WITH_FEEDBACK = gql`
  mutation SubmitUnsubscribeFeedback(
    $contactId: String!
    $feedbackOptionId: Int!
    $reason: String
  ) {
    SubmitUnsubscribeFeedback(
      contactId: $contactId
      feedbackOptionId: $feedbackOptionId
      reason: $reason
    )
  }
`;

export const UNSUBSCRIBE = gql`
  mutation UnsubscribeFromNewsletter($contactId: String!) {
    UnsubscribeFromNewsletter(contactId: $contactId)
  }
`;

export const SUBSCRIBE_BY_ID = gql`
  mutation SubscribeToNewsletter($contactId: String!) {
    SubscribeToNewsletter(contactId: $contactId)
  }
`;
