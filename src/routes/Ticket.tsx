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
  const date = useTicketStore();
  date.setDate("ssioeiz");
  return API.movieDetail(Number(params.movieId));
}

export function Ticket() {
  const data = useLoaderData() as MovieDetail;
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  const date = useTicketStore();

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate("/");
    clearAuth;
  }

  return (
    <div className="h-screen flex-col flex px-5 py-8 border-white border rounded-3xl">
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
                <p className=" mt-6 text-description text-dark">{date.date}</p>
                <p className="mt-1 text-primary text-white">08 Jan</p>
              </div>
              <div>
                <p className=" mt-6 text-description text-dark">Time</p>
                <p className=" mt-1 text-primary text-white">14:30</p>
              </div>
              <div>
                <p className=" mt-6 text-description text-dark">Price</p>
                <p className="mt-1 text-primary text-white">$42.85</p>
              </div>
            </div>
            <div>
              <p className=" mt-4 text-description text-dark">Seats</p>
              <p className="mt-1 text-primary text-white">C-3, C-5, A-4</p>
            </div>
          </div>
        </div>

        <div className=" justify-self-end flex border-dashed h-28 border-white border-t-2">
          <div className="absolute rounded-full bg-dark w-12 h-12 bottom-[90px] -left-6"></div>
          <div className="absolute rounded-full bg-dark w-12 h-12 bottom-[90px] -right-6"></div>
          <div className=" ml-6 mt-4">
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
