"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

export interface ProtectedImageProps extends ImageProps {
  allowRightClick?: boolean;
}

/**
 * High-performance, protected Next.js Image component.
 * - Prevents context-menu right-click saving and drag events.
 * - Retains 100% crawlability, accessibility, semantic alt tags, and Next.js optimization.
 * - Protects original imagery from direct casual scraping.
 */
export function ProtectedImage({
  allowRightClick = false,
  className = "",
  onContextMenu,
  onDragStart,
  ...props
}: ProtectedImageProps) {
  const handleContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!allowRightClick) {
      e.preventDefault();
    }
    if (onContextMenu) {
      onContextMenu(e);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    if (!allowRightClick) {
      e.preventDefault();
    }
    if (onDragStart) {
      onDragStart(e);
    }
  };

  const { style, ...restProps } = props;

  return (
    <Image
      {...restProps}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        // @ts-expect-error CSS property WebkitUserDrag is vendor-specific
        WebkitUserDrag: "none",
        ...style,
      }}
      className={`select-none pointer-events-auto [user-drag:none] [-webkit-user-drag:none] [-webkit-touch-callout:none] ${className}`}
    />
  );
}

export default ProtectedImage;
