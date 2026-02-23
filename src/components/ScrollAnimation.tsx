import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-down" | "fade-in" | "fade-right" | "fade-left" | "scale-in";
    delay?: number; // in ms
    duration?: number; // in ms
    threshold?: number; // 0 to 1
    once?: boolean;
}

const ScrollAnimation = ({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    duration = 700,
    threshold = 0.1,
    once = true,
}: ScrollAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    const getInitialTransform = () => {
        switch (animation) {
            case "fade-up":
                return "translateY(40px)";
            case "fade-down":
                return "translateY(-40px)";
            case "fade-left":
                return "translateX(40px)";
            case "fade-right":
                return "translateX(-40px)";
            case "scale-in":
                return "scale(0.9)";
            case "fade-in":
            default:
                return "none";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out will-change-[transform,opacity]",
                isVisible ? "opacity-100 transform-none" : "opacity-0",
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transform: isVisible ? "none" : getInitialTransform(),
            }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
