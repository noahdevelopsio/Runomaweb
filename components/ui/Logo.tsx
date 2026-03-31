export default function Logo({ className = "w-8 h-auto" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
            {/* Top Diamond (Sage) */}
            <polygon points="50,19 70,39 50,59 30,39" fill="#7CB49A" />

            {/* Bottom Left Diamond (Text Primary / White) */}
            <polygon points="28,41 48,61 28,81 8,61" fill="currentColor" />

            {/* Bottom Right Diamond (Text Primary / White) */}
            <polygon points="72,41 92,61 72,81 52,61" fill="currentColor" />
        </svg>
    );
}
