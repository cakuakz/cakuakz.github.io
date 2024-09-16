import { useCallback, useState } from "react";

export default function useSidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const handleSidebar = useCallback(() => {
    setIsSidebarVisible((value) => !value);
  }, [])

  return {
    isSidebarVisible,
    setIsSidebarVisible,
    handleSidebar,
  };
}
