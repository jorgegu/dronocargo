import { FunctionComponent } from "react";

import styled from "styled-components";

const Headline = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #808080;
`;
const Value = styled.p`
  font-size: 16px;
  font-weight: 500px;
  line-height: 24px;
`;

interface Props {
  headline: string;
  value: string;
}

const Cell: FunctionComponent<Props> = ({ headline, value }: Props) => (
  <div>
    <Headline> {headline}</Headline>
    <Value> {value}</Value>
  </div>
);
export default Cell;
