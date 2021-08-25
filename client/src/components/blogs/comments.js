import React from "react";

export default function Comments({ subscribeToNewComments, id }) {
  //calling subscribeToMore on every id change (blog changes)
  React.useEffect(() => {
    subscribeToNewComments();
    return () => new AbortController().abort();
  }, [id]);

  return <></>;
}
