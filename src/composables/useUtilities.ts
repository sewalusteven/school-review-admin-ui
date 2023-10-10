export function useUtilities(){


    const currencyFormatter = (amount:number, currencySymbol: string) => {
        if(currencySymbol === 'UGX'){
            return new Intl.NumberFormat("en-UG", {style:'currency', currency: currencySymbol}).format(amount)
        }

        if(currencySymbol === 'KES'){
            return new Intl.NumberFormat("en-KE", {style:'currency', currency: currencySymbol}).format(amount)
        }

        if(currencySymbol === 'USD' || currencySymbol === '$'){
            return new Intl.NumberFormat("en-US", {style:'currency', currency: 'USD'}).format(amount)
        }

    }

    return {
   currencyFormatter
    }
}