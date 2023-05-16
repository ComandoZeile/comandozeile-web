"use client";

import dynamic from "next/dynamic";
import CircleControl from "@/app/circleControl";
import styles from "@/styles/home.module.scss";

const DynamicStripes = dynamic(() => import("@/app/tunnelStripes"), {
   ssr: false
});

export default function HomePage() {
    return (
      <div>
          <div className={styles.home}>
              <CircleControl />
              <DynamicStripes />
          </div>
      </div>
    );
}