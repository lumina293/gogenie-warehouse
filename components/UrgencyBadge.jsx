export default function UrgencyBadge({ deadline }) {
    // Calculate urgency level based on time remaining
    const getUrgencyLevel = (deadline) => {
        const now = new Date();
        const diff = new Date(deadline) - now;
        const hours = diff / (1000 * 60 * 60);

        if (hours < 0) return 'overdue';
        if (hours <= 1) return 'critical';
        if (hours <= 4) return 'warning';
        return 'normal';
    };

    const urgency = getUrgencyLevel(deadline);

    const styles = {
        overdue: {
            badge: 'bg-red-100 text-red-800 border-red-300',
            text: 'OVERDUE',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            )
        },
        critical: {
            badge: 'bg-red-100 text-red-800 border-red-300',
            text: 'CRITICAL',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            )
        },
        warning: {
            badge: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            text: 'URGENT',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            )
        },
        normal: {
            badge: 'bg-green-100 text-green-800 border-green-300',
            text: 'ON TIME',
            icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            )
        }
    };

    const style = styles[urgency];

    return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full border ${style.badge}`}>
            {style.icon}
            {style.text}
        </div>
    );
}