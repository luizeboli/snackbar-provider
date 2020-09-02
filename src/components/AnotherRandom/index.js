import React from "react";
import useNotification from "../Notification/store";
import Button from "@material-ui/core/Button";

const RandomComponent = () => {
  const notify = useNotification((state) => state.showNotification);

  React.useEffect(() => console.log("updateing button"));

  return (
    <>
      <h2 style={{ marginTop: "2rem" }}>This is another random component</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          notify({
            message: `Triggering from another random piece ${Math.random()}`,
            action: () => console.log("Undo"),
          })
        }
      >
        This button will also trigger a notification
      </Button>
    </>
  );
};

export default RandomComponent;
