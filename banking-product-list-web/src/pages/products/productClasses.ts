export const ProductClasses = {
    productList:{
        container: {        
            display:`grid 
                        grid-cols-1 `,
                        width: 'w-fit'
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

export const BankingProductsStyles = {
    desktop: {
      productList: {
        footer: {
          container: {marginTop: '21px', marginBottom:'21px'},
          flexContainer: {display: "flex", justifyContent:"space-between"},
        }
      }
    }
  }

