import Nav from "@/components/Nav";
import WatchDispaly from "@/components/WatchDisplay";

export default function Home() {
  return (
    <div className="mx-12 my-8">
      <header>
        <Nav />
      </header>

      <div>
        <WatchDispaly />
      </div>
    </div>
  );
}
