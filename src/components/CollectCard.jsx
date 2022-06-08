import { Card, Icon } from "@shopify/polaris";
import { ChevronDownMinor, ChevronUpMinor } from "@shopify/polaris-icons";
import { useCallback, useEffect, useState } from "react";

import { KeepAlive } from "./KeepAlive";
import styled from "styled-components";

const SvgColor = styled.div`
  > span > svg {
    fill: rgba(92, 95, 98, 1);
  }
`;

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
          content: (
            <SvgColor>
              <Icon source={isUnfold ? ChevronDownMinor : ChevronUpMinor} />
            </SvgColor>
          ),
          onAction: toggle,
        },
      ]}
    >
      <KeepAlive show={isUnfold}>{children}</KeepAlive>
    </Card>
  );
}
