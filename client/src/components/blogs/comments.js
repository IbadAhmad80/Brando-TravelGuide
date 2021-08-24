import React from "react";

export default function Comments({ subscribeToNewComments, id }) {
  React.useEffect(() => {
    subscribeToNewComments();
    return () => new AbortController().abort();
  }, [id]);
  return <div></div>;
}
