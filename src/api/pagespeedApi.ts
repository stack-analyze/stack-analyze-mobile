import axios from "axios";
import { Pagespeed } from "@/interfaces/PagespeedInterface";

type StrategyOpt = "mobile" | "desktop";

export default async function pagespeedApi(url: string, strategy: StrategyOpt): Promise<Pagespeed> {
  const { data } = await axios.get<Pagespeed>("https://www.googleapis.com/pagespeedonline/v5/runPagespeed", {
    params: {
      url,
      key: "AIzaSyBEDaW4FxSZ2s1vz5CdD5Ai6PGZGdAzij0",
      strategy
    }
  });

  return data;
}
