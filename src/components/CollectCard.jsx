import { Card, Icon } from "@shopify/polaris";
import { ChevronDownMinor, ChevronUpMinor } from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";

import { KeepAlive } from "./KeepAlive";

export function CollectCard({ children, title, mountStatus }) {
  const [isUnfold, setIsUnfold] = useState(true);
  const toggle = useCallback(() => setIsUnfold((boo) => !boo), []);

  useEffect(() => {
    if (typeof mountStatus !== "undefined") {
      setIsUnfold(mountStatus);
    }
  }, [mountStatus]);

  return (
    <Card
      title={title}
      actions={[
        {
          content: <Icon source={isUnfold ? ChevronDownMinor : ChevronUpMinor} />,
          onAction: toggle,
        },
      ]}
    >
      <KeepAlive show={isUnfold}>{children}</KeepAlive>
    </Card>
  );
}
