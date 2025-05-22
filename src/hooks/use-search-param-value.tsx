import { useSearchParams } from "react-router";

export function useSearchParamValue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramSize = parseInt(searchParams.get("size") ?? "0");
  const paramColor = parseInt(searchParams.get("color") ?? "0");

  function setParam({ name, value }: { name: string; value: string }) {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    setSearchParams(params);
  }

  return { paramSize, paramColor, setParam };
}
