import styled from "styled-components";
import {
  space,
  width,
  height,
  textAlign,
  display,
  maxWidth,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  flex,
  color,
  backgroundColor,
  border,
  SpaceProps,
  WidthProps,
  HeightProps,
  TextAlignProps,
  DisplayProps,
  MaxWidthProps,
  BorderRadiusProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  FlexWrapProps,
  FlexDirectionProps,
  JustifyContentProps,
  AlignItemsProps,
  FlexProps as FlexShorthand,
  ColorProps,
  BorderProps,
} from "styled-system";

interface FlexGapProps {
  gap?: string;
}

const flexGap = ({ gap }: FlexGapProps) => {
  return { gap };
};

export type FlexProps = SpaceProps &
  WidthProps &
  HeightProps &
  FlexDirectionProps &
  FlexWrapProps &
  JustifyContentProps &
  AlignItemsProps &
  FlexShorthand &
  FlexGapProps;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${space} ${width} ${height} ${flexDirection} ${flexWrap} 
  ${justifyContent} ${alignItems} ${flex} ${flexGap}
`;

export type ButtonProps = SpaceProps &
  WidthProps &
  HeightProps &
  BorderProps &
  ColorProps;

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background: transparent;
  ${space} ${width} ${height} ${border} 
  ${color} ${backgroundColor}
`;

type TextProps = FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  SpaceProps &
  TextAlignProps &
  DisplayProps &
  ColorProps;

export const Text = styled.p<TextProps>`
  ${fontSize} ${fontWeight} ${lineHeight} ${space} 
  ${display} ${textAlign} ${color} ${backgroundColor}
`;

export const Image = styled.img<SpaceProps & WidthProps & HeightProps>`
  ${space} ${width} ${height}
`;
