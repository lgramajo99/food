import { TOGGLE_HAMGURGER } from "../action-types";

export const toggleHamburger = isOpen => ({
    type: TOGGLE_HAMGURGER,
    payload: isOpen
});