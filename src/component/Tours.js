import React from "react";
import Tour from "./Tour";

const Tours = ({ tourData, removeTour }) => {
  // console.log(tourData)
  return (
    <section className="bg-purple-50 w-full min-h-screen">
      <div className="pt-10">
        <h1 className="text-4xl text-center text-slate-900 font-semibold  underline underline-offset-8 decoration-slate-900">
          Our Tours
        </h1>
      </div>
      <div>
        {tourData.map((tourItem) => {
        return <Tour key={tourItem.id} {...tourItem} removeTour={removeTour}></Tour>
     
        })}
      </div>
    </section>
  );
};
     
export default Tours;