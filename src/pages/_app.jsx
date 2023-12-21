import "@/src/styles/index.scss";
import { Toaster } from "react-hot-toast";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GoogleAnalytics } from "nextjs-google-analytics";

const client = new ApolloClient({
  uri: "https://adz7rajlui.execute-api.ca-central-1.amazonaws.com/graphql",
  cache: new InMemoryCache(),
});

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "rgba(76, 83, 95, 1)",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-6R1K2ZCM7Z"} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
