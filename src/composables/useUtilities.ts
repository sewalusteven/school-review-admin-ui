import {StarIcon as StarIconFull} from "@heroicons/vue/24/solid";
import {StarIcon} from "@heroicons/vue/24/outline";

export function useUtilities(){
    const formatUgandanPhoneNumber = (phoneNumber:string): string => {
        // Remove any non-digit characters from the input
        phoneNumber = phoneNumber.replace(/\D/g, '');

        // Check the length of the phone number and format accordingly
        if (phoneNumber.length === 10) {
            // Add "0" to the beginning of 10-digit numbers
            return '0' + phoneNumber.slice(1).replace(/(\d{3})(\d{6})/, '$1-$2');
        } else if (phoneNumber.length === 9) {
            // Add "0" to the beginning of 9-digit numbers
            return '0' + phoneNumber.replace(/(\d{3})(\d{6})/, '$1-$2');
        } else if (phoneNumber.length === 12 && phoneNumber.startsWith('256')) {
            // Format as "+256 XXX-XXXXXX"
            return phoneNumber.replace(/(\d{3})(\d{6})/, '+256 $1-$2');
        } else {
            // Invalid phone number format
            return 'Invalid phone number';
        }
    }

    const renderStarRating = (rating:number, container:string) => {
        const starContainer = document.getElementById(container);

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("star");

            if (i <= rating) {
                star.innerHTML = "&#9733;"; // Full star (Unicode for a filled star)
            } else {
                star.innerHTML = "&#9734;"; // Empty star (Unicode for an empty star)
            }

            starContainer?.appendChild(star);
        }
    }


    return {
        formatUgandanPhoneNumber
    }
}