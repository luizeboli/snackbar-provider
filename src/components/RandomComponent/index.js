import React from "react";
import useNotification from "../Notification/store";
import Button from "@material-ui/core/Button";

const RandomComponent = () => {
  const notify = useNotification((state) => state.showNotification);

  React.useEffect(() => console.log("updateing button"));

  return (
    <>
      <h2 style={{ marginTop: "2rem" }}>This is a random component</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          notify({
            message: `This should trigger a snackbar ${Math.random()}`,
            action: () => console.log("Undo"),
          })
        }
      >
        This button will trigger a notification
      </Button>
    </>
  );
};

export default RandomComponent;
