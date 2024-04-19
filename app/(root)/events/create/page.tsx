import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  console.log(userId);
  return (
    <>
      <section className="bg-primary-50 imgbg bg-cover bg-top py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Fill The Form to Create An Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent