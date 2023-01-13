import clsx from "clsx";
import React, { useState } from "react";

export function selectionPage() {
  return (
    <>
      <div className="bg-background">
        <div className="grid grid-cols-4 grid-rows-3 border-dark-light">
          <p className="text-secondary">DATE</p>
          Select Date
        </div>
        <div className="grid grid-cols-4 grid-rows-2 border-r-dark-light">
          <p className="text-secondary">TIME</p>
          Select Time
        </div>
      </div>
    </>
  );
}
