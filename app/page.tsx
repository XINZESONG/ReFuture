import Banner from "./home/banner/banner";
import refutureLogo from "../asset/RFLogo2.png";
import Layout from "./layout/layout";
import youtubeBg from "../asset/youtube.png";
import Amiibo from "./home/amiibo/amiibo";
import Showcase from "./home/showcase/showcase";
import Introduction from "./home/introduction/introduction";

const Page = () => {
  return (
    <div className="h-full min-h-screen flex flex-col justify-between items-center bg-black scrollbar-hide">
      <Layout>
        <Banner refutureLogo={refutureLogo} />
        <Introduction />
        {/* YouTube section disabled */}
        {/* <Showcase></Showcase> */}
        {/* <Amiibo></Amiibo> */}
      </Layout>
    </div>
  );
};
export default Page;
