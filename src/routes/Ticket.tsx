import { CodeBar } from "../components/Barcode";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { API } from "../components/API";
import { Button, ButtonVariant } from "../components/Button";
import { MovieDetail } from "../types/api";
import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { useTicketStore } from "../stores/BookingStore";

export async function ticketLoader({ params }: LoaderFunctionArgs) {
  return API.movieDetail(Number(params.movieId));
}

export function Ticket() {
  const data = useLoaderData() as MovieDetail;
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  // const { clear } = useTicketStore();
  const store = useTicketStore();

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate("/");
    clearAuth;
  }

  localStorage.clear();

  return (
    <div className="h-screen flex-col flex px-5 py-8">
      <div className="flex flex-col flex-grow justify-between relative rounded-xl  bg-white-dimmed-heavy">
        <div>
          <img
            className="w-full h-40 rounded-t-xl object-cover"
            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          />
          <div className=" px-6">
            <p className=" py-2 text-titleticket text-white">{data.title}</p>
            <div className="flex justify-between">
              <div>
                <p className=" mt-6 text-description text-dark">Date</p>
                <p className="mt-1 text-primary text-white">{store.date}</p>
              </div>
              <div>
                <p className=" mt-6 text-description text-dark">Time</p>
                <p className=" mt-1 text-primary text-white">{store.time}</p>
              </div>
              <div>
                <p className=" mt-6 text-description text-dark">Price</p>
                <p className="mt-1 text-primary text-white">
                  {store.totalPrice}
                </p>
              </div>
            </div>
            <div>
              <p className=" mt-4 text-description text-dark">Seats</p>
              <p className="mt-1 text-primary text-white">
                {store.seats.join(" , ")}
              </p>
            </div>
          </div>
        </div>

        <div className=" justify-self-end flex border-dashed h-28 border-white border-t-2">
          <div className="absolute rounded-full bg-dark w-12 h-12 bottom-[90px] -left-6"></div>
          <div className="absolute rounded-full bg-dark w-12 h-12 bottom-[90px] -right-6"></div>
          <div className="flex justify-center w-full h-full items-center">
            <CodeBar></CodeBar>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button
          variant={ButtonVariant.primary}
          label="Back to Home"
          onClick={onSubmit}
        ></Button>
      </div>
    </div>
  );
}
