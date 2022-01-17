import React, { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading } from "../components";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const firebase = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [profile]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL}></Loading>
    ) : <Loading.ReleaseBody/>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
