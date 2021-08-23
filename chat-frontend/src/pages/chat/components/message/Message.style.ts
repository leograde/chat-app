import styled from "styled-components";

const MessageRow = styled.div<{ isSender: boolean }>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
  padding: 0 20px;
  margin: 5px;
`;

const MessageWrapper = styled.div<{ isSender: boolean }>`
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${({ isSender }) => (isSender ? "#4062bb" : "#3b3b3b")};
  color: #f6f6f6;
  border-radius: 12px;
  max-width: 55%;
`;

const MessageSender = styled.div`
  color: #ababab;
  font-size: 10px;
  font-weight: bold;
`;

const MessageDate = styled.div`
  color: #ababab;
  font-size: 10px;
  font-weight: bold;
  text-align: right;
`;

const MessageContent = styled.div`
  display: flex;
  margin: 5px 0;
  align-items: center;
`;

export {
  MessageRow,
  MessageWrapper,
  MessageSender,
  MessageDate,
  MessageContent,
};
