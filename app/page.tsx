import CircleControl from "@/app/circleControl";
import TunnelStripes from "@/app/tunnelStripes";

export default function HomePage() {
    return (
      <div>
          <div className="home">
              <CircleControl />
              <TunnelStripes />
          </div>
      </div>
    );
}