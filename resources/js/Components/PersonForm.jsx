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
        <>
        <h1 className="text-xl font-bold mb-4">Add Person</h1>
            <form onSubmit={submit} className="space-y-2">
                <input
                    type="text"
                    placeholder="First Name"
                    value={data.first_name}
                    onChange={(e) => setData('first_name', e.target.value)}
                    className="border p-2 block w-full"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={data.last_name}
                    onChange={(e) => setData('last_name', e.target.value)}
                    className="border p-2 block w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={processing}
                >
                    Add
                </button>
            </form>
        </>
    );
}
