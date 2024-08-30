import { Divider, DividerScheme } from "./dividerTypes";


export const dividerPallete:DividerScheme = {
  light:{
    active: {
      background: "bg-outlineVariant",
    },
    inactive: {
      background: "bg-outlineVariant",
    },
  },
  dark:{
    active: {
      background: "bg-darkOutlineVariant",
    },
    inactive: {
      background: "bg-darkOutlineVariant",
    },
  },
}
export const dividerAttributes: any = {
  width: 'w-full',
  height: 'h-[1px]',
  left: 'left-[16px]',
  right: 'right-[0px]',
  middleInsetLeftMargin: 'start-[16px]',
  middleInsetRightMargin: 'end-[16px]',
  
};

export const verticalDividerAttributes = {
  height: 'h-full',
  widht: 'w-[1px]',
  top: 'top-[16px]',
  bottom: 'bottom-[0px]',
  middleInsetLeftMargin: 'start-[16px]',
  middleInsetRightMargin: 'end-[16px]',
}

export const verticalFullHeightAttributes = {
  height: 'h-full',
  marginX: 'mx-[1px]',
  rightMargin: 'mr-[1px]',
  bottomMargin: 'mb-[8px]',
}

export const fullWidthDividerAttributes = {
  width: 'w-full',
  marginY: 'my-[4px]',
  rightMargin: 'mr-[8px]',
  bottomMargin: 'mb-[8px]',
}
export const insetDividerAttributes = {
  width: 'w-full',
  paddingX: 'px-[16px]',
  marginY: 'my-[4px]',
  rightMargin: 'mr-[8px]',
  bottomMargin: 'mb-[8px]',
}
export const divider: Divider = {
  dividerAttributes:dividerAttributes,
  verticalDividerAttributes:verticalDividerAttributes,
  dividerPallete:dividerPallete,
  divderWidhtAttributes: {
    fullWidth : fullWidthDividerAttributes,    
    inset: insetDividerAttributes
  },
  verticalHeightAttributes: verticalFullHeightAttributes
}