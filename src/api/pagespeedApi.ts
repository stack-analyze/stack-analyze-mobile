type StrategyOpt = "mobile" | "desktop";

export default async function pagespeedApi(url: string, strategy: StrategyOpt): Promise<Pagespeed> {
  const { data } = await axios.get<Pagespeed>("https://www.googleapis.com/pagespeedonline/v5/runPagespeed", {
    params: {
      url,
      strategy
    }
  });

  return data;
}
