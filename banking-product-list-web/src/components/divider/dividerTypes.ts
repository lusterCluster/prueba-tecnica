export type Divider = {
  dividerAttributes: DividerAttributes;
  verticalDividerAttributes: any
  dividerPallete: DividerScheme;
  divderWidhtAttributes: DividerWidhts;
  verticalHeightAttributes: VerticalDividerHeights
};
export type VerticalDividerHeights = {
  height: string
  marginX: string
  rightMargin: string
  bottomMargin: string
}

export type DividerWidhts = {
  fullWidth: {
    width: string;
    marginY: string;
    rightMargin: string;
    bottomMargin: string;
};
inset: {
    width: string;    
    paddingX: string;
    marginY: string;
    rightMargin: string;
    bottomMargin: string;
  };
};
export type DividerAttributes = {
  width: string;
  height: string;
  inset: string;
};

export type DividerScheme = {
  light: {
    active: {
      background: string;
    };
    inactive: {
      background: string;
    };
  };
  dark: {
    active: {
      background: string;
    };
    inactive: {
      background: string;
    };
  };
};
