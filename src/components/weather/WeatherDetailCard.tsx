import { Skeleton } from "../ui/skeleton";

interface WeatherDetailCardProps {
  title: string;
  data: string | undefined;
  isLoading: boolean;
}

export default function WeatherDetailCard({ title, data, isLoading }: WeatherDetailCardProps) {

  const Container = (isLoading||data==null)? Skeleton : "div";

  return (
    <Container className="flex flex-col gap-3 bg-[#262540] p-4 rounded-xl border border-[#3C3B5E]">
      <h1 className="opacity-90 font-light">{title}</h1>
      <p className="text-3xl font-light">{(isLoading || !data) ? "--" : data}</p>
    </Container>
  );
}
