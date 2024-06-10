import React from "react";
const map = () => {
  return (
    <div className="relative mt-24">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.6680569967803!2d-7.546002424303285!3d33.58796687333526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzE2LjciTiA3wrAzMiczNi4zIlc!5e0!3m2!1sen!2sma!4v1718026659374!5m2!1sen!2sma"
        width="800"
        className=""
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-white ml-1 absolute top-0 h-80 w-80 mt-2"></div>
    </div>
  );
};

export default map;
