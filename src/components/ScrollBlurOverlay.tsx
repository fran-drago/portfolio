const layers = [
  {
    blur: 0.046875,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 0.0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25.0%, rgba(0,0,0,0) 37.5%)",
    zIndex: 1,
  },
  {
    blur: 0.09375,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25.0%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50.0%)",
    zIndex: 2,
  },
  {
    blur: 0.1875,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 25.0%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50.0%, rgba(0,0,0,0) 62.5%)",
    zIndex: 3,
  },
  {
    blur: 0.375,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50.0%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75.0%)",
    zIndex: 4,
  },
  {
    blur: 0.75,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 50.0%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75.0%, rgba(0,0,0,0) 87.5%)",
    zIndex: 5,
  },
  {
    blur: 1.5,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75.0%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100.0%)",
    zIndex: 6,
  },
  {
    blur: 3,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 75.0%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100.0%, rgba(0,0,0,0) 112.5%)",
    zIndex: 7,
  },
  {
    blur: 6,
    mask: "linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100.0%, rgba(0,0,0,1) 112.5%, rgba(0,0,0,0) 125.0%)",
    zIndex: 8,
  },
];

export function ScrollBlurOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "120px",
        borderRadius: "0px 0px 0px 0px",
        overflow: "hidden",
        background: "none",
        zIndex: 30,
        pointerEvents: "none",
      }}
    >
      {layers.map((layer) => (
        <div
          key={layer.zIndex}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: layer.zIndex,
            pointerEvents: "none",
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
            borderRadius: "0px 0px 0px 0px",
          }}
        />
      ))}
    </div>
  );
}
