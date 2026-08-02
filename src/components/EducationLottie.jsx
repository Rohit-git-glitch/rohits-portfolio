import { useEffect, useRef, useState } from "react";
import { useLottie } from "lottie-react";

function LottiePlayer({ animationData }) {
    const { View } = useLottie({
        animationData,
        loop: true,
        autoplay: true,
    });
    return View;
}

export default function EducationLottie() {
    const [animationData, setAnimationData] = useState(null);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let active = true;
        fetch("/education.json")
            .then((res) => res.json())
            .then((data) => active && setAnimationData(data))
            .catch((err) => console.error("[v0] Failed to load education.json:", err));
        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`relative flex items-center justify-center transition-all duration-700 ease-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
        >
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-3/4 w-3/4 rounded-full bg-cyan-400/25 blur-3xl" />
            </div>

            <div className="edu-float w-full max-w-md ">
                {animationData && <LottiePlayer animationData={animationData} />}
            </div>
        </div>
    );
}