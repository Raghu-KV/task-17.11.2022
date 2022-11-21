import "./index.css";
import PriceCard from "./components/PriceCard";
function App() {
  return (
    <div className="container">
      <div className="row my-height d-flex align-items-center">
        <PriceCard
          content={[
            "Single User",
            "5GB Storage",
            "Unlimited Public Projects",
            "Community Access",
          ]}
          plan={"FREE"}
          price={"$0"}
          notValid={[
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            "Monthly Status Reports",
          ]}
        />
        <PriceCard
          content={[
            "5 Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
          ]}
          plan={"PLUS"}
          price={"$9"}
          notValid={["Monthly Status Reports"]}
        />
        <PriceCard
          content={[
            "Unlimited Users",
            "150GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Unlimited Free Subdomains",
            "Monthly Status Reports",
          ]}
          plan={"PRO"}
          price={"$49"}
          notValid={[]}
        />
      </div>
    </div>
  );
}

export default App;
// ✖✔
