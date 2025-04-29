import React from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";

export default function PersonForm(){

    const { data, setData, post, processing, reset } = useForm({
        first_name: '',
        last_name: '',
    });

    const submit = (e) => {
        e.preventDefault();

        if (!data.first_name || !data.last_name ) {
            alert("Both first and last name are required!");
            return;
        }

        post(route('people.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="flex justify-center mt-10">
            <form onSubmit={submit} className="w-full max-w-md space-y-4">
                
                {/* First Name */}
                <div className="flex items-center">
                    <label className="w-32">First Name:</label>
                    <input
                        type="text"
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        className="flex-1 border p-2 rounded"
                    />
                </div>


                <div className="flex items-center">
                    <label className="w-32">Last Name:</label>
                    <input
                        type="text"
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        className="flex-1 border p-2 rounded"
                    />
                </div>


                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={processing}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
