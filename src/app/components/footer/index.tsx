import { GetStarted } from "@/app/components/footer/GetStarted";
import { Links } from "./Links";

export function Footer() {
  return (
    <div className="bg-background-purple">
      <GetStarted />

      <div className="bg-background-dark">
        <Links />
      </div>
    </div>
  );
}
