import PreferenceForm from "@/components/waitlist/PreferenceForm";

export default function WaitlistPage({ params }: { params: { token: string } }) {
    return (
        <>
            <PreferenceForm token={params.token} />
        </>
    )
}