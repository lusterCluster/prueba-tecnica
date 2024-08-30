import React from 'react'
import {convertToTailwindClass} from '../../util/tailwind/classConverter'
import {divider} from './dividerClasses'
type Props = {
    isActive: "active" | "inactive";
    fullWidht: boolean;
    vertical: boolean
  };
  
const Divider = (props: Props) => {
    convertToTailwindClass
    const containerClass = props.fullWidht
      ? convertToTailwindClass (divider.divderWidhtAttributes.fullWidth)
      : convertToTailwindClass(divider.divderWidhtAttributes.inset);
      
      if(props.vertical) {
        return (
          <div className={convertToTailwindClass(divider.verticalHeightAttributes)}>
            <div      
              className={
                convertToTailwindClass(divider.verticalDividerAttributes) +
                " " +
                'bg-primary'
              }
            ></div>
          </div>
        );
  
      } else {
  
        return (
            <>
          <div className={containerClass}>
            <div      
              className={
                convertToTailwindClass(divider.dividerAttributes) +
                " " +
                'bg-primary'
              }
            ></div>
          </div>
            </>
        );
      }
  };
  export default Divider;