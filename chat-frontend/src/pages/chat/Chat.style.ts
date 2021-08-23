import styled from "styled-components";

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MessagesSection = styled.section`
  height: 100%;
  padding-top: 20px;
  padding-bottom: 70px;
  overflow: auto;
  background-color: #292f36;
`;

const SubmitMessageSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #292929;
  padding: 0 20px;
`;

export { ChatWrapper, MessagesSection, SubmitMessageSection };
