export default function WaitlistPage({ params }: { params: { email: string } }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Thank you for joining the waitlist!</h1>
                <p className="text-gray-700 mb-6">We have received your email: <span className="font-mono">{params.email}</span></p>
                <p className="text-gray-700">We&apos;ll keep you updated on our progress and let you know when we launch.</p>
            </div>
        </div>
    )
}