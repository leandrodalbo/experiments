import { useCallback, useEffect, useState } from "react";

const UsingHooks = () => {
  const [value, setValue] = useState("loading...");

  const fetchValue = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ value: "fetched result" });
      }, 2000);
    });
  }, []);

  useEffect(() => {
    fetchValue().then((result) => setValue(result.value));
  });

  return (
    <section>
      <p>{value}</p>
    </section>
  );
};

export default UsingHooks;
