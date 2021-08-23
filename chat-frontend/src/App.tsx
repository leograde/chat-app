import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { splitLink } from "./apollo";
import { ChatContainer, SubmitUsername } from "./pages";
import { RoutesEnum } from "./routes";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #292f36;
`;

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <StyledApp>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path={RoutesEnum.SUBMIT_USERNAME}>
              <SubmitUsername />
            </Route>
            <Route
              exact
              path={RoutesEnum.CHAT}
              render={({ location }) => {
                const username =
                  new URLSearchParams(location.search).get("username") ?? "";

                const isUsernameSet = username?.length > 0;

                if (!isUsernameSet) return <SubmitUsername />;

                return <ChatContainer username={username} />;
              }}
            />
          </Switch>
        </Router>
      </ApolloProvider>
    </StyledApp>
  );
}

export default App;
