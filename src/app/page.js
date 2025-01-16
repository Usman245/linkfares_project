import Image from "next/image";
import FlightBanner from "./components/FlightBanner";
import OverViewBanner from "./components/OverViewBanner";
import ExploreMore from "./components/ExploreMore";
import LinkFareAppSection from "./components/LinkFareAppSection";
import ReviewSection from "./components/ReviewSection";
import Newsletter from "./components/Newsletter";

import { Provider } from "react-redux";
import store from "@/redux/store";


export default function Home() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <FlightBanner />
      <OverViewBanner />
      <ExploreMore />
      <LinkFareAppSection />
      <ReviewSection />
      {/* </Provider> */}
    </div>
  );
}
