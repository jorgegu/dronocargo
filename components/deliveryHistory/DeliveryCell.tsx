import { FunctionComponent } from "react";
import { Text } from "../../core/ui";

interface Props {
  headline: string;
  value: string | number;
}

const Cell: FunctionComponent<Props> = ({ headline, value }: Props) => (
  <div>
    <Text fontSize="14px" lineHeight="16px" color="textGray">
      {headline}
    </Text>
    <Text fontWeight="500" lineHeight="24px">
      {value}
    </Text>
  </div>
);
export default Cell;
