import { useWebHaptics } from "web-haptics/react";

export function useHaptics() {
  const { trigger } = useWebHaptics();

  return {
    hapticLight: () => trigger("light"),
    hapticMedium: () => trigger("medium"),
    hapticSelection: () => trigger("selection"),
    hapticSuccess: () => trigger("success"),
    hapticRigid: () => trigger("rigid"),
  };
}
