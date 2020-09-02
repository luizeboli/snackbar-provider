import React, { useEffect, useState } from "react";
import useNotification from "./store";
import { Snackbar, Button } from "@material-ui/core";

const selector = (state) => ({
  notification: state.notifications[0],
  hideNotification: state.hideNotification,
});

const Notification = () => {
  const [open, setOpen] = useState(false);
  const { notification, hideNotification } = useNotification(selector);

  useEffect(() => {
    if (notification) setOpen(!!notification);
  }, [notification]);

  const handleClose = () => setOpen(false);

  const handleExited = () => hideNotification();

  return (
    <Snackbar
      autoHideDuration={1000}
      message={notification?.message}
      onClose={handleClose}
      onExited={handleExited}
      open={open}
      action={
        !!notification?.action && (
          <Button color="primary" onClick={notification.action}>
            Undo
          </Button>
        )
      }
    />
  );
};

export default Notification;
