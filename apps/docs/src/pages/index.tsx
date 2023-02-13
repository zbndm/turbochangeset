import { Button } from "@o6/core";
import { useIsomorphicLayoutEffect } from "@o6/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("o6 docs page");
  }, []);
  return (
    <div>
      <h1>o6 Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
