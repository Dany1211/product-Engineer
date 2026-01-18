export default function Section({ id, children, className = "" }) {
    return (
        <section id={id} className={`py-24 md:py-32 px-6 ${className}`}>
            <div className="max-w-4xl mx-auto">
                {children}
            </div>
        </section>
    );
}
