export const ProductClasses = {
    productList:{
        container: {        
            display:`grid 
                        sm:grid-cols-1 
                        md:grid-cols-12 
                        lg:grid-cols-12`,
        },
        mobileHeaderContainer: {            
            visible:"visible sm:invisible",
            margin: 'mb-[56px]',
            height:"h-[55px] w-full",
            padding: "px-[16px] py-[12px]",            
            position: "fixed top-0",
            bg: "bg-primary",
            display:"flex justify-between",
            gap:"gap-[50px]"

        },        

    }
}