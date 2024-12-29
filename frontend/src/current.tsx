import React, { useRef, useEffect } from "react";

export const setCurrentClasses = (): React.RefObject<HTMLDivElement> => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current?.firstElementChild) {
            containerRef.current.firstElementChild.classList.add("current");

            if (containerRef.current.firstElementChild?.firstElementChild) {
                containerRef.current.firstElementChild.firstElementChild.classList.add("current");
            }
        }
    });

    return containerRef;
};

