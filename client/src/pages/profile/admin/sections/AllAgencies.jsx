import { useEffect, useState } from "react";
import UserState from "../../../../state/UserState";
import AgencyCard from "../../../../components/user/AgencyCard";

export default function AllAgencies() {
  const { getAllAgencies, agencies } = UserState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const findAgencies = async () => {
      const res = await getAllAgencies();
      if (res.status === 200 || res.status === 201) {
        console.log("Agencies are fetched");
        setIsLoading(false);

        console.log(agencies);

        return;
      }
      console.log("Failed to fetch Agencies");
      setIsLoading(false);
    };
    findAgencies();
  }, []);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {agencies && agencies.map((agency) => <AgencyCard agency={agency} />)}
    </div>
  );
}
