import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

export default function Form({ children }) {
  return <Container>{children}</Container>;
}

Form.Error = ({ children }) => {
  return <Error>{children}</Error>;
};

Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = ({ children }) => {
  return <Title>{children}</Title>;
};

Form.Text = ({ children }) => {
  return <Text>{children}</Text>;
};

Form.TextSmall = ({ children }) => {
  return <TextSmall>{children}</TextSmall>;
};

Form.Link = ({to, children }) => {
  return <Link to={to}>{children}</Link>;
};

Form.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};
