import create from "zustand";

interface IUseDrawer {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDrawer = create<IUseDrawer>((set) => ({
  open: true,
  // open: false,
  setOpen: (open) => set({ open }),
}));
