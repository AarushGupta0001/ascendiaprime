"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const ParticleCanvas = dynamic(() => import("@/components/effects/ParticleCanvas"), {
  ssr: false,
  loading: () => null,
});

type LazyParticleCanvasProps = ComponentProps<typeof ParticleCanvas>;

export default function LazyParticleCanvas(props: LazyParticleCanvasProps) {
  return <ParticleCanvas {...props} />;
}
