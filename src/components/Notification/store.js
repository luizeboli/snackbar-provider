import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set, get) => ({
  notifications: [],

  showNotification: (notification) =>
    set({ notifications: [...get().notifications, notification] }),

  hideNotification: () => set({ notifications: get().notifications.slice(1) }),
});

export default create(devtools(store, "Notification-Store"));
