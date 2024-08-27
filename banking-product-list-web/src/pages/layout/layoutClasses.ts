export const gridItemsCenter = {
  parent: {
    display: "grid grid-cols-1",
    placeItems: "md:place-items-center lg:place-items-center",
    width: "w-full",
    height: "h-screen",
    bg: "bg-background",
  },
  child: {
    // display: `grid 
    //            grid-cols-1 
    //            sm:grid-cols-1 
    //            md:grid-cols-8 
    //            lg:grid-cols-12`,
    
    text: "text-primary",
    width: "w-fit",
  },
};
export const layout = {
  center: gridItemsCenter,
};
