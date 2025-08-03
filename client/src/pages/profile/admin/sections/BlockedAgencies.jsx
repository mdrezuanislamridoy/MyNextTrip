import React, { useEffect } from "react";
import UserState from "../../../../state/UserState";
export default function BlockedAgencies() {
  const { getBlockedProfiles, blockedProfiles } = UserState();

  useEffect(() => {
    const fetchBlockedProfile = async () => {
      const res = await getBlockedProfiles();
      if (res.status === 200 || res.status === 201) {
        return res.data.message;
      }
      return;
    };
    fetchBlockedProfile();
  }, []);

  return (
    <div>
      {blockedProfiles && blockedProfiles.map((profile) => <>{profile.name}</>)}
    </div>
  );
}
