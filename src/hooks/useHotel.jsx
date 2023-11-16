import { useContext } from "react";
import HotelProvider from "../context/HotelProvider";

const useHotel = () => {
    return useContext(HotelProvider)
}

export default useHotel;