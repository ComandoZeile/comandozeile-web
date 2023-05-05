import dynamic from "next/dynamic";
import CircleControl from "@/app/circleControl";

const DynamicStripes = dynamic(() => import("@/app/tunnelStripes"), {
   loading: () => <p>Loading</p>,
   ssr: false
});

export default function HomePage() {
    return (
      <div>
          <div className="home">
              <CircleControl />
              <DynamicStripes />
          </div>
      </div>
    );
}