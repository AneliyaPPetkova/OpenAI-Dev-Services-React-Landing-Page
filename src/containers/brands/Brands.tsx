import { google, atlassian, dropbox, shopify, slack } from "./imports";

const Brands = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="Google logo" />
      </div>
      <div>
        <img src={slack} alt="Slack logo" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian logo" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox logo" />
      </div>
      <div>
        <img src={shopify} alt="Shopify logo" />
      </div>
    </div>
  );
};

export default Brands;
