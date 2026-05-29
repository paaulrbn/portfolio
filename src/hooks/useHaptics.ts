import { useMemo } from "react";
import { useHaptics as useHapticsBase } from "@haptics/react";

export function useHaptics() {
  const { trigger } = useHapticsBase();

  return useMemo(
    () => ({
      hapticLight: () => trigger("impact-light"),
      hapticMedium: () => trigger("impact-medium"),
      hapticSelection: () => trigger("selection"),
      hapticSuccess: () => trigger("success"),
      hapticRigid: () => trigger("impact-heavy"),
    }),
    [trigger],
  );
}
