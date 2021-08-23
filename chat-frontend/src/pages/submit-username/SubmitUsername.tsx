import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoutesEnum } from "../../routes";
import { UsernameRequestDialog } from "./UsernameRequestDialog";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export function SubmitUsername() {
  const history = useHistory();

  const handleUsernameSubmitted = (username: string) => {
    history.push(`${RoutesEnum.CHAT}?username=${username}`);
  };

  return (
    <Wrapper>
      <UsernameRequestDialog onUsernameSubmit={handleUsernameSubmitted} />
    </Wrapper>
  );
}
