const UmrahPackageDetail = () => {
  return (
    <div className="mt-4">
      <h3 className="text-green-600 font-poppins font-medium text-xl">
        Air Tickt
      </h3>
      <div className="font-medium text-lg font-poppins">
        Direct AirLine:{" "}
        <span className="font-normal">Lahore-Jaddah-Lahore</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        Economy Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 195000/PP*</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        Economy+Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 215000/PP*</span>
      </div>
      <h3 className="text-green-600 font-medium text-base font-poppins my-1">
        3 star Package
      </h3>
      <div className="flex flex-col text-sm">
        Starting From
        <span className="font-medium text-base">PKR 250000/PP*</span>
      </div>
      <div className="flex flex-col ">
        <h4>1st Days: Departure from Lahore</h4>
        <p>
          Your pilgrimage begins as you depart from Lahore and embark on a
          flight to the blessed city of Makkah. Take this time to prepare
          yourself mentally and spiritually for the holy journey ahead.
        </p>
      </div>
      <div className="flex flex-col my-2">
        <h1 className="font-poppins text-xl mb-1 font-medium">
          Day 1 to 5: Makkah The Holliest Place
        </h1>
        <p>
          {`      Upon arrival in Makkah, you will be accommodated in a comfortable
          hotel conveniently located near the Grand Mosque. Over the next six
          days, you will have the opportunity to perform rituals, including
          Tawaf (circumambulation) around the Kaaba and Sa'i (walking) between
          the hills of Safa and Marwa. Our experienced guides will be there to
          assist and guide you throughout your stay, ensuring a smooth and
          fulfilling experience.`}
        </p>
      </div>
    </div>
  );
};
export default UmrahPackageDetail;
