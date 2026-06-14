import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit } =
        useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >
            <input
                {...register("name")}
                placeholder="Name"
                className="w-full border p-3"
            />

            <input
                {...register("email")}
                placeholder="Email"
                className="w-full border p-3"
            />

            <textarea
                {...register("message")}
                placeholder="Message"
                className="w-full border p-3"
            />

            <button
                className="bg-black text-white px-6 py-3"
            >
                Send
            </button>
        </form>
    );
}