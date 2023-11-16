import { Outlet } from "react-router-dom";
import HotelProvider from "../context/HotelProvider";

export default function Layout(){
    return (
        <>
            <HotelProvider>
                <div>
                <Outlet />
                </div>
            </HotelProvider>
            {/* <Outlet /> */}
        </>
    );
}